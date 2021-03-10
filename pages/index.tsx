import React, { FC } from "react";
import { domain, rootNotionPageId } from "@utils/config";
import { resolveNotionPage } from "@utils/resolve-notion-page";
import { NotionPage } from "@components/NotionPage";
import { PageProps } from "@utils/types";

export const getStaticProps = async (): Promise<{
  props?: PageProps;
  revalidate?: number;
  redirect?: {
    destination: string;
  };
}> => {
  try {
    console.log("FETCHING PAGE:", rootNotionPageId, domain);
    const props = await resolveNotionPage(domain, rootNotionPageId);
    console.log("PAGE FETCHED:", props);

    return { props, revalidate: 60 * 60 };
  } catch (err) {
    console.error("page error", rootNotionPageId, domain, err.message);
    throw new Error(err);
  }
};

const NotionDomainPage: FC<PageProps> = props => {
  console.log(props);
  return <NotionPage {...props} />;
};

export default NotionDomainPage;
