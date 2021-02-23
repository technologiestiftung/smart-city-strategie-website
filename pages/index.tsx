import React, { FC } from "react";
import { domain } from "@utils/config";
import { resolveNotionPage } from "@utils/resolve-notion-page";
import { NotionPage } from "@components/NotionPage";
import { PageProps } from "@utils/types";

export const getStaticProps = async (): Promise<{
  props?: Record<string, unknown>;
  revalidate?: number;
  redirect?: {
    destination: string;
  };
}> => {
  try {
    const props = await resolveNotionPage(domain);

    return { props, revalidate: 10 };
  } catch (err) {
    console.error("page error", domain, err);
    throw err;
  }
};

const NotionDomainPage: FC<PageProps> = props => <NotionPage {...props} />;

export default NotionDomainPage;
