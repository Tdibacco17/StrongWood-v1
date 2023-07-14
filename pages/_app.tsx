import { ContactProvider } from '@/context/ContactContextProvider'
import '@/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import localFont from 'next/font/local';

// const Knucklehead = localFont({
//   src: '../public/assets/fonts/Knucklehead.otf',
//   variable: '--font-Knucklehead',
//   display: "optional",
//   weight: "700",
//   style: "normal"
// })
// <main className={`${Knucklehead.className}`}>
// </main>

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Strong Wood</title>
        <meta name="description" content="Strong Wood" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="public" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="StroongWood, Strong, Wood" />

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
      <ContactProvider>
        <Component {...pageProps} />
      </ContactProvider>
    </>
  )
}
