import Head from 'next/head';

import '../styles/globals.css';
import '../styles/dark-mode.css';
import '../styles/orbit.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>KangaWorks</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
