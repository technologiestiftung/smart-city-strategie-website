import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SmartCityStrategieLogo } from "@components/SmartCityStrategieLogo";
import { SmartCityLogo } from "@components/SmartCityLogo";

export const Header: FC<{ title?: string }> = ({ title = "" }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
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

          <span
            className={[
              "justify-self-end inline-grid grid-cols-1",
              "underline text-gray-500 hover:text-gray-800 transition-colors",
            ].join(" ")}
          >
            <div className='pt-2'>
              <SmartCityLogo />
            </div>
          </span>
        </div>
      </div>
      <div className='relative mt-24 sm:mt-32'>
        {isHome && (
          <>
            <Image
              src='/smart-city-header-cover.jpg'
              width='1920'
              height='680'
              layout='responsive'
              objectFit='cover'
              quality='60'
            />
            <div
              className='absolute bottom-0 left-0 leading-tight w-screen py-6 sm:py-12 text-white h-2/4 grid content-end'
              style={{
                background:
                  "linear-gradient(0deg, rgba(229,99,124,.5) 0%, transparent 100%)",
                mixBlendMode: "screen",
              }}
            >
              <h1 className='px-4 container mx-auto max-w-screen-lg text-4xl sm:text-7xl'>
                {title}
              </h1>
            </div>
          </>
        )}
      </div>
      {!isHome && (
        <div
          className='sm:fixed w-screen bg-white bg-opacity-90'
          style={{ zIndex: 99 }}
        >
          <nav
            className='border-b border-gray-200 container mx-auto max-w-screen-lg z-10 grid pt-2'
            style={{ gridTemplateColumns: "auto 1fr" }}
          >
            <button
              className='cursor-pointer pt-4 pb-4 px-6 focus:outline-none focus:ring-inset focus:ring-2 focus:ring-red-400 rounded'
              onClick={() => router.back()}
            >
              <span className='text-gray-300'>←</span>{" "}
              <span className='border-b border-gray-300'>Zurück</span>
            </button>
            <h1 className='text-xl px-6 pt-4 pb-4 border-l border-gray-200 truncate'>
              {title}
            </h1>
          </nav>
        </div>
      )}
    </>
  );
};
