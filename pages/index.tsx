import { FC } from "react";
import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "@components/NotionPage";

const notion = new NotionAPI();

export const getStaticProps = async (): Promise<{
  recordMap: ExtendedRecordMap;
}> => {
  const recordMap = await notion.getPage("db31dff4705d4a73894a83971aad95f4");
  return { recordMap };
};

const Homepage: FC<{ recordMap: ExtendedRecordMap }> = ({ recordMap }) => (
  <NotionPage recordMap={recordMap} />
);

export default Homepage;
