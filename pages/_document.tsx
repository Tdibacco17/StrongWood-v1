import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="/assets/fonts/Knucklehead.otf"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href="/assets/fonts/Roboto-Bold.ttf"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href="/assets/fonts/Roboto-Regular.ttf"
          rel="preload"
          as="font"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
