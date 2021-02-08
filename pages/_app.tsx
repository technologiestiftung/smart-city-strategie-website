import { FC } from "react";
import "../styles/globals.css";

const App: FC<{
  Component: FC;
  pageProps: Record<string, unknown>;
}> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
