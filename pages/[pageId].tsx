import React, { FC } from "react";
import { domain } from "@utils/config";
import { resolveNotionPage } from "@utils/resolve-notion-page";
import { NotionPage } from "@components/NotionPage";
import { PageProps } from "@utils/types";

interface ContextType {
  params: {
    pageId: string;
  };
}

export const getServerSideProps = async (
  context: ContextType
): Promise<{
  props?: PageProps;
  redirect?: {
    destination: string;
  };
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

const NotionDomainDynamicPage: FC<PageProps> = props => (
  <NotionPage {...props} />
);

export default NotionDomainDynamicPage;
