import React, { FC } from "react";
import { domain, isDev } from "@utils/config";
import { resolveNotionPage } from "@utils/resolve-notion-page";
import { NotionPage } from "@components/NotionPage";
import { PageProps } from "@utils/types";
import { getStaticPagesPaths } from "@utils/is-static-page";

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

    return { props };
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

  const ret = {
    paths: getStaticPagesPaths(),
    fallback: true,
  };

  console.log("ALL STATIC PATHS:", ret.paths);
  return ret;
}

const NotionDomainDynamicPage: FC<PageProps> = props => (
  <NotionPage {...props} />
);

export default NotionDomainDynamicPage;
