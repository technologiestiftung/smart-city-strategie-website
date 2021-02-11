import { FC } from "react";
import Image from "next/image";

export const Header: FC = () => (
  <>
    <div className='fixed top-0 left-0 w-screen bg-white py-8 z-10'>
      <div className='container mx-auto max-w-screen-lg z-10'>
        <img alt='Smart City Berlin logo' src='/logo.svg' />
      </div>
    </div>
    <div className='mb-20' style={{ marginTop: 152 }}>
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
