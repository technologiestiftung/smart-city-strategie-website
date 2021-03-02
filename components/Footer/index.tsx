import { FC } from "react";
import Image from "next/image";
import { SmartCityLogo } from "@components/SmartCityLogo";
import { CityLabLogo } from "@components/CityLabLogo";

const currentYear = new Date().getFullYear();

export const Footer: FC = () => (
  <div className='container px-8 py-8 mx-auto bg-white max-w-screen-lg'>
    <div className=' mt-8 border-b border-gray-300 py-8'>
      <div
        className='inline-grid grid-flow-row-dense items-stretch gap-4 md:grid-flow-col-dense grid-cols-2 sm:grid-cols-4 md:grid-cols-none'
        style={{
          gridAutoRows: 73,
        }}
      >
        <div className='inline-flex' style={{ maxWidth: 220 }}>
          <SmartCityLogo />
        </div>
        <div
          className='inline-flex border-l border-gray-300 pl-4'
          style={{
            height: 73,
          }}
        >
          <Image
            src='/01_beBerlin_pdnnnt.jpg'
            alt='Logo Berlin'
            width='78'
            height='19'
            objectFit='contain'
          />
        </div>
        <div className='inline-flex border-l border-gray-300 pl-4'>
          <Image
            src='/02_RBm_SKzl-01_i4zgwy.png'
            alt='Logo Berlin Regierende Buergermeister von Berlin'
            width='78'
            height='46'
            objectFit='contain'
          />
        </div>
        <div className='inline-flex border-l border-gray-300 pl-4'>
          <Image
            src='/03_sen_wienbe_logo-01_ctse97.png'
            alt='Logo Berlin Senatsverwaltung fuer Wirtschaft, Energie und Betriebe'
            width='78'
            height='53'
            objectFit='contain'
          />
        </div>
        <div className='inline-flex border-l border-gray-300 pl-4'>
          <Image
            src='/eu-logo_wqrkgx.png'
            alt='Logo Europaeische Union - Fonds fuer regionaler Entwicklung'
            width='119'
            height='33'
            objectFit='contain'
          />
        </div>
        <div className='inline-flex border-l border-gray-300 pl-4 items-center'>
          <a href='https://www.citylab-berlin.org/'>
            <CityLabLogo />
          </a>
        </div>
      </div>
    </div>
    <div className='flex justify-items-center mt-4'>
      <div className='inline-flex gap-4 justify-items-center mx-auto uppercase flex-wrap'>
        <span>© {currentYear} - CityLAB</span>
        <a
          href='https://www.citylab-berlin.org/legalnote'
          title='Smart City Impressum'
          className='pl-4 border-l border-black hover:text-red-500 transition-colors'
        >
          Impressum
        </a>
        <a
          href='https://www.citylab-berlin.org/dataprivacy'
          title='Smart City Datenschutzrichtlinien'
          className='pl-4 border-l border-black hover:text-red-500 transition-colors'
        >
          Datenschutz
        </a>
      </div>
    </div>
  </div>
);