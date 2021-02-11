import { FC } from "react";

export const Logo: FC = () => (
  <a
    href='https://smart-city-berlin.de/'
    title='Mit Ihnen machen wir Berlin zur Smart City!'
    className='inline-block opacity-1 transition-opacity hover:opacity-50'
  >
    <img alt='Smart City Berlin logo' src='/logo.svg' />
  </a>
);
