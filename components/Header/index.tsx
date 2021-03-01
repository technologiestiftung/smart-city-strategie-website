import { FC } from "react";
import Image from "next/image";
import { SmartCityStrategieLogo } from "@components/SmartCityStrategieLogo";
import { SmartCityLogo } from "@components/SmartCityLogo";

export const Header: FC = () => (
  <>
    <div
      className='absolute sm:fixed top-0 left-0 w-screen bg-white py-4 md:py-6 shadow-sm'
      style={{ zIndex: 100 }}
    >
      <div
        className={[
          "px-4 container mx-auto max-w-screen-lg z-10 items-center gap-8",
          "grid grid-cols-2",
          "sm:flex sm:justify-between",
        ].join(" ")}
      >
        <SmartCityStrategieLogo />
        <h2 className='hidden leading-6 text-xl sm:mt-4 sm:pb-1 md:inline-block sm:text-3xl sm:leading-7'>
          Öffentlicher
          <br />
          Wissensspeicher
        </h2>

        <a
          href='https://smart-city-berlin.de/strategie'
          title='Mit Ihnen machen wir Berlin zur Smart City!'
          target='_blank'
          rel='noreferrer'
          className={[
            "justify-self-end inline-grid grid-cols-1",
            "underline text-gray-500 hover:text-gray-800 transition-colors",
          ].join(" ")}
        >
          <div className='sm:w-40'>
            <SmartCityLogo />
          </div>
          <span className='hidden sm:inline-block'>
            Zur Smart City Berlin Hauptseite ↗
          </span>
        </a>
      </div>
    </div>
    <div className='mb-10 md:mb-20 mt-20 sm:mt-32'>
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
