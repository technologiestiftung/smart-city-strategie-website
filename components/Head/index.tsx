import { FC } from "react";
import NextHead from "next/head";

const siteUrl = process.env.URL;

const Head: FC<{
  currentPagePath?: string;
  description?: string;
  siteTitle?: string;
  pageTitle?: string;
  fbAppId?: string;
  keywords?: string[];
  themeColor?: string;
  locales?: string[];
  locale?: string;
  twitterUsername?: string;
  socialThumbnail?: string;
}> = ({
  currentPagePath = "/",
  description = "",
  siteTitle = "Smart City Berlin",
  pageTitle = "Smart City Strategie",
  fbAppId = "",
  keywords = [
    "Smart City Berlin",
    "Berlin der Zukunft",
    "Smarte Stadt Deutschland",
    "Smart City Projekte",
  ],
  themeColor = "#F7323E",
  locales = ["de"],
  locale = "de",
  twitterUsername = "@SmartBerlin",
  socialThumbnail = "",
}) => {
  const longTitle = [pageTitle, siteTitle].join(" ・ ");

  return (
    <NextHead>
      <title>{longTitle}</title>

      {description && <meta name='description' content={description} />}

      <meta property='og:type' content='article' />

      <meta name='theme-color' content={themeColor} />

      {keywords.length > 0 && (
        <meta name='keywords' content={keywords.join(", ")} />
      )}

      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, minimal-ui'
      />

      <meta itemProp='name' content={longTitle} />
      <meta itemProp='description' content={description} />

      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername && (
        <meta name='twitter:site' content={`@${twitterUsername}`} />
      )}
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />

      <meta property='og:title' content={pageTitle} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content={locale} />
      <meta property='og:locale:alternate' content={`[${locales.join(",")}]`} />
      <meta property='og:url' content={`${siteUrl}${currentPagePath}`} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={siteTitle} />
      {fbAppId && <meta property='fb:app_id' content={fbAppId} />}

      {socialThumbnail && (
        <>
          <meta itemProp='image' content={socialThumbnail} />
          <meta name='twitter:image' content={socialThumbnail} />
          <meta property='og:image:alt' content={socialThumbnail} />
          <meta property='og:image' content={socialThumbnail} />
        </>
      )}

      <link rel='apple-touch-icon' href='/favicon.svg' />
      <link key='/favicon.ico' rel='shortcut icon' type='image/x-icon' />
      <link key='/favicon.svg' rel='icon' type='image/svg' />

      <link rel='author' href='SMART CITY BERLIN' />
    </NextHead>
  );
};

export default Head;
