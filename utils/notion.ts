import { NotionAPI } from "notion-client";
import {
  Block,
  ExtendedRecordMap,
  SearchParams,
  SearchResults,
} from "notion-types";
import { getPreviewImages } from "./get-preview-images";
import { mapNotionImageUrl } from "./map-image-url";
import { fetchTweetAst } from "static-tweets";
import pMap from "p-map";

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
});

interface BlockObjectType {
  block: Block;
  url: string;
}

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId);
  const blockIds = Object.keys(recordMap.block);

  const imageUrls: string[] = blockIds
    .map(blockId => {
      const block = recordMap.block[blockId]?.value;

      if (block) {
        if (block.type === "image") {
          const source = block.properties?.source?.[0]?.[0];

          if (source) {
            return {
              block,
              url: source,
            };
          }
        }

        if ((block.format as any)?.page_cover) {
          const source = (block.format as any).page_cover;

          return {
            block,
            url: source,
          };
        }
      }

      return null;
    })
    .filter((item): item is BlockObjectType => !!item)
    .map(({ block, url }: BlockObjectType): string | null =>
      mapNotionImageUrl(url, block)
    )
    .filter((item): item is string => !!item);

  const urls = Array.from(new Set(imageUrls));
  const previewImageMap = await getPreviewImages(urls);
  (recordMap as any).preview_images = previewImageMap;

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
