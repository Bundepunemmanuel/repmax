import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo-192.png" />
        <link rel="apple-touch-icon" href="/logo-192.png" />
        <meta name="theme-color" content="#fdf1e5" />
        <meta
          name="google-site-verification"
          content="GebhthpaloXSjRSxS5caStnehvOmuPm8MWP-W4krm2Q"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
