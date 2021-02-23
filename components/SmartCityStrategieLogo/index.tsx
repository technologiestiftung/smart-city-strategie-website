import { FC } from "react";
import Link from "next/link";

export const SmartCityStrategieLogo: FC = () => (
  <Link href='/'>
    <a
      href='/'
      title='Mit Ihnen machen wir Berlin zur Smart City!'
      className='inline-block opacity-1 transition-opacity hover:opacity-50'
    >
      <img src='/scbs_logo.svg' alt='Smart City Logo' />
    </a>
  </Link>
);
