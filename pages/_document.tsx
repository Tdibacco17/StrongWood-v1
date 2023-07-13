import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link
          href="/assets/fonts/Knucklehead.otf"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/otf"
        />
        <link
          href="/assets/fonts/Roboto-Bold.ttf"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
        <link
          href="/assets/fonts/Roboto-Regular.ttf"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
