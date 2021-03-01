import React from "react";
import Link from "next/link";
import Head from "./Head";

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = "Error";

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
          Diese Seite konnte nicht erfolgreich geladen werden
        </h1>

        {statusCode && (
          <pre className='px-4 py-3 rounded text-gray-600 max-w-full border border-gray-400 bg-gray-100 break-all whitespace-pre-wrap'>
            Fehlercode: {statusCode}
          </pre>
        )}

        <Link href='/'>
          <a className='underline block mt-6'>Zur Startseite</a>
        </Link>
      </div>
    </>
  );
};
