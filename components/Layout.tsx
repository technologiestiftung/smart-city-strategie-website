import React, { FC } from "react";
import { useRouter } from "next/router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: FC<{ title?: string }> = ({ children, title }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      <Header title={title} />
      <div
        className={[
          "px-4 container mx-auto max-w-screen-lg mb-20",
          isHome ? "pt-12 sm:pt-20" : "pt-8 sm:pt-28",
        ].join(" ")}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
