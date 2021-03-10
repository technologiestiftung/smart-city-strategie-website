import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";

export const notion = new NotionAPI();

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  try {
    return await notion.getPage(pageId);
  } catch (err) {
    console.error("ERROR IN GETPAGE:", pageId, err);
    throw new Error(err);
  }
}
