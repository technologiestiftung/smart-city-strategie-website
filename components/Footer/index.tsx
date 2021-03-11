import { FC } from "react";
import Image from "next/image";
import { SmartCityLogo } from "@components/SmartCityLogo";
import { CityLabLogo } from "@components/CityLabLogo";

const currentYear = new Date().getFullYear();

export const Footer: FC = () => (
  <div className='container px-8 py-8 mx-auto bg-white max-w-screen-lg'>
    <div className=' mt-8 border-b border-gray-300 py-8'>
      <div className='flex gap-12 flex-wrap'>
        <a href='https://www.citylab-berlin.org/'>
          <span className='block pl-12 leading-tight text-gray-500 w-full'>
            Bereitgestellt vom
          </span>
          <CityLabLogo />
        </a>
        <span>
          <span className='block pb-3 leading-tight text-gray-500 w-full'>
            Gefördert durch
          </span>
          <a href='https://www.bmi.bund.de/' className='mr-4'>
            <Image
              src='/partner-logos/Logo-BMI.png'
              alt='Logo des Bundesministerium des Innern, für Bau und Heimat'
              width='100'
              height='50'
              objectFit='contain'
            />
          </a>
          <a href='https://www.kfw.de/'>
            <Image
              src='/partner-logos/Logo-KfW.png'
              alt='Logo des KfW, Frankfurt am Main'
              width='100'
              height='50'
              objectFit='contain'
            />
          </a>
        </span>
      </div>
    </div>
    <div className=' mt-4 border-b border-gray-300 py-8'>
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
          className='inline-flex sm:border-l border-gray-300 sm:pl-4'
          style={{
            height: 73,
          }}
        >
          <Image
            src='/partner-logos/01_beBerlin.jpg'
            alt='Logo Berlin'
            width='78'
            height='19'
            objectFit='contain'
          />
        </div>
        <div className='inline-flex sm:border-l border-gray-300 sm:pl-4'>
          <Image
            src='/partner-logos/02_RBm_SKzl-01.png'
            alt='Logo Berlin Regierende Buergermeister von Berlin'
            width='78'
            height='46'
            objectFit='contain'
          />
        </div>
        <div className='inline-flex sm:border-l border-gray-300 sm:pl-4'>
          <Image
            src='/partner-logos/03_sen_wienbe_logo-01.png'
            alt='Logo Berlin Senatsverwaltung fuer Wirtschaft, Energie und Betriebe'
            width='78'
            height='53'
            objectFit='contain'
          />
        </div>
        <div className='inline-flex sm:border-l border-gray-300 sm:pl-4'>
          <Image
            src='/partner-logos/eu-logo.png'
            alt='Logo Europaeische Union - Fonds fuer regionaler Entwicklung'
            width='119'
            height='33'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
    <div className='flex justify-items-center mt-4'>
      <div className='inline-flex gap-4 justify-items-center mx-auto uppercase flex-wrap'>
        <span>© {currentYear} - CityLAB</span>
        <a
          href='https://www.citylab-berlin.org/legalnote'
          title='Smart City Impressum'
          className='pl-4 sm:border-l border-black hover:text-red-500 transition-colors'
        >
          Impressum
        </a>
        <a
          href='https://www.citylab-berlin.org/dataprivacy'
          title='Smart City Datenschutzrichtlinien'
          className='pl-4 sm:border-l border-black hover:text-red-500 transition-colors'
        >
          Datenschutz
        </a>
      </div>
    </div>
  </div>
);
