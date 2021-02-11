import { FC } from "react";
import Image from "next/image";
import { Logo } from "@components/Logo";

export const Header: FC = () => (
  <>
    <div className='fixed top-0 left-0 w-screen bg-white py-8 z-10'>
      <div className='container mx-auto max-w-screen-lg z-10'>
        <Logo />
      </div>
    </div>
    <div className='mb-20' style={{ marginTop: 160 }}>
      <Image
        src='/header-cover.jpg'
        width='1920'
        height='680'
        layout='responsive'
        objectFit='cover'
      />
    </div>
  </>
);
