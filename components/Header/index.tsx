import { FC } from "react";
import Image from "next/image";
import { Logo } from "@components/Logo";

export const Header: FC = () => (
  <>
    <div className='absolute sm:fixed top-0 left-0 w-screen bg-white py-4 md:py-6 z-10 shadow-sm'>
      <div className='px-4 container mx-auto max-w-screen-lg z-10 sm:flex items-center sm:justify-between gap-8'>
        <Logo />
        <h2 className='sm:inline-block pl-28 sm:pl-0 pb-4 sm:pb-1 text-2xl sm:text-3xl sm:leading-7 leading-6'>
          Öffentlicher
          <br />
          Wissensspeicher
        </h2>
        <a
          href='https://smart-city-berlin.de/strategie'
          title='Mit Ihnen machen wir Berlin zur Smart City!'
          target='_blank'
          rel='noreferrer'
          className='justify-self-end inline-block pl-28 sm:pl-0 underline text-gray-500 hover:text-gray-800 transition-colors'
        >
          Zur Smart City Berlin Hauptseite ↗
        </a>
      </div>
    </div>
    <div className='mb-10 md:mb-20 mt-56 sm:mt-32'>
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
