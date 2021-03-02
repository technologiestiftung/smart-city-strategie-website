import { NextApiRequest, NextApiResponse } from "next";
import { host } from "@utils/config";
import { staticPagesMap } from "@utils/is-static-page";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== "GET") {
    return res.status(405).send({ error: "method not allowed" });
  }

  // cache sitemap for up to one hour
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, max-age=3600, stale-while-revalidate=3600"
  );
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
};

const createSitemap = (): string => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${host}</loc>
      </url>

      <url>
        <loc>${host}/</loc>
      </url>


      ${Object.keys(staticPagesMap)
        .map(canonicalPagePath =>
          `
            <url>
              <loc>${host}/${canonicalPagePath}</loc>
            </url>
          `.trim()
        )
        .join("")}

    </urlset>
    `;
