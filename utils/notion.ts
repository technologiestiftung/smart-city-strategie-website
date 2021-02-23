import { NotionAPI } from "notion-client";
import { ExtendedRecordMap, SearchParams, SearchResults } from "notion-types";
import { fetchTweetAst } from "static-tweets";
import pMap from "p-map";

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
});

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId);
  const blockIds = Object.keys(recordMap.block);

  const tweetIds: string[] = blockIds
    .map(blockId => {
      const block = recordMap.block[blockId]?.value;

      if (block) {
        if (block.type === "tweet") {
          const src = block.properties?.source?.[0]?.[0];

          if (src) {
            const id = src.split("?")[0].split("/").pop();
            if (id) return id;
          }
        }
      }

      return null;
    })
    .filter((item): item is string => !!item);

  const tweetAsts = await pMap(
    tweetIds,
    async tweetId => {
      try {
        return {
          tweetId,
          tweetAst: await fetchTweetAst(tweetId),
        };
      } catch (err) {
        console.error("error fetching tweet info", tweetId, err);
      }
    },
    {
      concurrency: 4,
    }
  );

  const tweetAstMap = tweetAsts.reduce((acc, tweet) => {
    if (tweet && tweet.tweetAst) {
      return {
        ...acc,
        [tweet.tweetId]: tweet.tweetAst,
      };
    } else {
      return acc;
    }
  }, {} as Record<string, unknown>);

  (recordMap as any).tweetAstMap = tweetAstMap;

  return recordMap as any;
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params) as any;
}
