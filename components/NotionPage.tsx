import { FC } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  NotionRenderer,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x";
import { PageProps } from "@utils/types";
import Head from "./Head";
import { CustomHtml } from "./CustomHtml";
import { Page404 } from "./Page404";
import { Layout } from "./Layout";

const Modal = dynamic(
  () => import("react-notion-x").then(notion => notion.Modal),
  { ssr: false }
);

const Pdf = dynamic(async () => {
  const notion = await import("react-notion-x");
  return notion.Pdf;
});

const PageLink: FC<{
  href: string;
  as: string;
  passHref: boolean;
  prefetch: boolean;
  replace: boolean;
  scroll: boolean;
  shallow: boolean;
  locale: string;
}> = ({
  href,
  as,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...props
}) => (
  <Link
    href={href}
    as={as}
    passHref={passHref}
    prefetch={prefetch}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    locale={locale}
  >
    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
    <a {...props} />
  </Link>
);

export const NotionPage: React.FC<PageProps> = ({
  site,
  recordMap,
  error,
  pageId,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading ...</div>;
  }

  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;

  if (!recordMap || !site || error || !keys.length || !block) {
    return (
      <Layout>
        <Page404 site={site} pageId={pageId} error={error} />
      </Layout>
    );
  }

  return (
    <Layout>
      <Head
        description='Öffentlicher Wissensspeicher zur Entwicklung der Smart City Strategie'
        locale='de'
        locales={["de"]}
        pageTitle='Smart City Strategie'
        siteTitle='Smart City Berlin'
        themeColor='#F7323E'
        socialThumbnail='/social-thumbnail.png'
        twitterUsername='@SmartBerlin'
        currentPagePath='/'
      />
      <NotionRenderer
        components={{
          pageLink: PageLink,
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
          modal: Modal,
          pdf: Pdf,
        }}
        recordMap={recordMap}
        showCollectionViewDropdown={false}
        rootPageId='bec3fb01ae3b4d33bd2c1582fc1eb06f'
      />
      <CustomHtml site={site} />
    </Layout>
  );
};
