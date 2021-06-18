import '@styles/globals.css';
import Layout from '../components/Layout'

import { FC } from 'react';
import { AppProps } from 'next/app';


const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  };

  export default MyApp;
