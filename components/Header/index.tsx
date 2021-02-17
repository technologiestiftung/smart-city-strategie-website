import { FC } from "react";
import Image from "next/image";
import { Logo } from "@components/Logo";

export const Header: FC = () => (
  <>
    <div className='fixed top-0 left-0 w-screen bg-white py-4 md:py-6 z-10'>
      <div className='px-4 container mx-auto max-w-screen-lg z-10'>
        <Logo />
      </div>
    </div>
    <div className='mb-10 md:mb-20' style={{ marginTop: 144 }}>
      <Image
        src='/smart-city-header-cover_zn34yh.jpg'
        width='1920'
        height='680'
        layout='responsive'
        objectFit='cover'
        quality='60'
      />
    </div>
  </>
);
