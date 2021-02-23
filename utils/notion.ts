import { NotionAPI } from "notion-client";
import { ExtendedRecordMap, SearchParams, SearchResults } from "notion-types";

export const notion = new NotionAPI();

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  return await notion.getPage(pageId);
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params);
}
