import React, { FC } from "react";
import { domain, rootNotionPageId } from "@utils/config";
import { resolveNotionPage } from "@utils/resolve-notion-page";
import { NotionPage } from "@components/NotionPage";
import { PageProps } from "@utils/types";

export const getStaticProps = async (): Promise<{
  props?: PageProps;
  redirect?: {
    destination: string;
  };
}> => {
  try {
    console.log("FETCHING PAGE:", rootNotionPageId);
    const props = await resolveNotionPage(domain, rootNotionPageId);
    console.log("PAGE FETCHED:", props);

    return { props };
  } catch (err) {
    console.error("page error", domain, err);
    throw err;
  }
};

const NotionDomainPage: FC<PageProps> = props => {
  console.log(props);
  return <NotionPage {...props} />;
};

export default NotionDomainPage;
