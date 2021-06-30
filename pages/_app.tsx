import { FC, useEffect } from "react";
import "react-notion-x/src/styles.css";
import "../styles/globals.css";
import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const App: FC<{
  Component: FC;
  pageProps: Record<string, unknown>;
}> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!MATOMO_URL || !MATOMO_SITE_ID) return;
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  });

  return <Component {...pageProps} />;
};

export default App;
