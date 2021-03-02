import React, { FC } from "react";
import { domain, isDev } from "@utils/config";
import { getSiteMaps } from "@utils/get-site-maps";
import { resolveNotionPage } from "@utils/resolve-notion-page";
import { NotionPage } from "@components/NotionPage";
import { PageProps } from "@utils/types";

interface ContextType {
  params: {
    pageId: string;
  };
}

export const getStaticProps = async (
  context: ContextType
): Promise<{
  redirect?: {
    destination: string;
  };
  revalidate?: number;
  props?: PageProps;
}> => {
  const rawPageId = context.params.pageId as string;

  try {
    if (rawPageId === "sitemap.xml" || rawPageId === "robots.txt") {
      return {
        redirect: {
          destination: `/api/${rawPageId}`,
        },
      };
    }

    const props = await resolveNotionPage(domain, rawPageId);

    return { props, revalidate: 10 };
  } catch (err) {
    console.error("page error", domain, rawPageId, err);

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err;
  }
};

export async function getStaticPaths(): Promise<{
  paths: Array<{
    params: {
      pageId: string;
    };
  }>;
  fallback: boolean;
}> {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const siteMaps = await getSiteMaps();

  const ret = {
    paths: siteMaps.flatMap(siteMap =>
      Object.keys(siteMap.canonicalPageMap).map(pageId => ({
        params: {
          pageId,
        },
      }))
    ),
    // paths: [],
    fallback: true,
  };

  console.log(ret.paths);
  return ret;
}

const NotionDomainDynamicPage: FC<PageProps> = props => (
  <NotionPage {...props} />
);

export default NotionDomainDynamicPage;