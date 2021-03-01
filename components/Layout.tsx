import React, { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <div className='px-4 container mx-auto max-w-screen-lg mb-20 pt-20'>
      {children}
    </div>
    <Footer />
  </>
);
