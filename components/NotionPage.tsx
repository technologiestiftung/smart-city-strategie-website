import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ExtendedRecordMap } from "notion-types";
// core notion renderer
import {
  NotionRenderer,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x";

const Modal = dynamic(
  () => import("react-notion-x").then(notion => notion.Modal),
  { ssr: false }
);

interface PageError {
  message?: string;
  statusCode: number;
}

interface PageProps {
  recordMap?: ExtendedRecordMap;
  pageId?: string;
  error?: PageError;
}
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

export const NotionPage: React.FC<PageProps> = ({ recordMap, error }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading ...</div>;
  }

  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;

  if (!recordMap || error || !keys.length || !block) {
    if (!block) return <div>Block not found</div>;
    return <div>Error{error || ""}</div>;
  }

  const title = "Title";
  return (
    <div className='container mx-auto max-w-screen-lg my-20'>
      <Head>
        <meta property='og:title' content={title} />
        <meta name='twitter:title' content={title} />

        <title>{title}</title>
      </Head>

      <NotionRenderer
        components={{
          pageLink: PageLink,
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
          modal: Modal,
        }}
        recordMap={recordMap}
        showCollectionViewDropdown={false}
      />
    </div>
  );
};
