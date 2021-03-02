import { parsePageId } from "notion-utils";
import { ExtendedRecordMap } from "notion-types";

import * as acl from "./acl";
import * as types from "./types";
import { pageUrlOverrides, pageUrlAdditions } from "./config";
import { getPage } from "./notion";
import { getSiteForDomain } from "./get-site-for-domain";

export async function resolveNotionPage(
  domain: string,
  rawPageId?: string
): Promise<types.PageProps> {
  let site: types.Site;
  let pageId: string;
  let recordMap: ExtendedRecordMap;

  if (rawPageId && rawPageId !== "index") {
    pageId = parsePageId(rawPageId);

    if (!pageId) {
      // check if the site configuration provides an override of a fallback for
      // the page's URI
      const override =
        pageUrlOverrides[rawPageId] || pageUrlAdditions[rawPageId];

      if (override) {
        pageId = parsePageId(override);
      }
    }

    if (pageId) {
      const resources = await Promise.all([
        getSiteForDomain(domain),
        getPage(pageId),
      ]);

      site = resources[0];
      recordMap = resources[1];
    } else {
      return {
        error: {
          message: `Not found "${rawPageId}"`,
          statusCode: 404,
        },
      };
    }
  } else {
    site = await getSiteForDomain(domain);
    pageId = site.rootNotionPageId;

    console.log(site);
    recordMap = await getPage(pageId);
  }

  const props = { site, recordMap, pageId };
  return { ...props, ...(await acl.pageAcl(props)) };
}
