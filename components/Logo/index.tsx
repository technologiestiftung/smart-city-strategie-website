import { FC } from "react";
import Image from "next/image";

export const Logo: FC = () => (
  <a
    href='https://smart-city-berlin.de/'
    title='Mit Ihnen machen wir Berlin zur Smart City!'
    className='inline-block opacity-1 transition-opacity hover:opacity-50'
  >
    <Image
      alt='Smart City Berlin logo'
      src='/logo_j8yjjs.svg'
      width='265px'
      height='88px'
      objectFit='contain'
    />
  </a>
);
