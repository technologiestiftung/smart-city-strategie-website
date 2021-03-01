import * as React from "react";
import Link from "next/link";
import * as types from "@utils/types";
import Head from "./Head";

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || "Page Not Found";

  return (
    <>
      <Head>
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />

        <title>{title}</title>
      </Head>

      <div
        className='max-w-xl mx-auto grid place-content-center'
        style={{ minHeight: "calc(100vh - 500px)" }}
      >
        <h1 className='font-bold text-2xl mb-4'>
          Diese Seite wurde nicht gefunden oder existiert nicht
        </h1>

        {error ? (
          <pre className='px-4 py-3 rounded text-gray-600 max-w-full border border-gray-400 bg-gray-100 break-all whitespace-pre-wrap'>
            {error.message}
          </pre>
        ) : (
          pageId && (
            <p>
              Stellen Sie sicher, dass die Seite mit id &quot;{pageId}&quot;
              veröffentlicht ist.
            </p>
          )
        )}

        <Link href='/'>
          <a className='underline block mt-6'>Zur Startseite</a>
        </Link>
      </div>
    </>
  );
};
