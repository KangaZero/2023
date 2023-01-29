import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
          <meta name="theme-color" content="#fff" />
          <link rel="preconnect" href="https://stijndv.com" />
          <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
