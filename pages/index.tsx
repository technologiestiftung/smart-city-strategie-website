import { FC } from "react";
import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "@components/NotionPage";

const notion = new NotionAPI();

export const getStaticProps = async (): Promise<{
  props: {
    recordMap: ExtendedRecordMap;
  };
}> => {
  const recordMap = await notion.getPage("bec3fb01ae3b4d33bd2c1582fc1eb06f");
  return { props: { recordMap } };
};

const Homepage: FC<{ recordMap: ExtendedRecordMap }> = ({ recordMap }) => (
  <NotionPage recordMap={recordMap} />
);

export default Homepage;
