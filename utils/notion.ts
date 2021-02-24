import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
});

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  return await notion.getPage(pageId);
}
