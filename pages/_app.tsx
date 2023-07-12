import { ContactProvider } from '@/context/ContactContextProvider'
import '@/globals.css'
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const Knucklehead = localFont({
  src: '../public/assets/fonts/Knucklehead.otf',
  variable: '--font-Knucklehead',
  display: "optional",
  weight: "700",
  style: "normal"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${Knucklehead.className}`}>
      <ContactProvider>
        <Component {...pageProps} />
      </ContactProvider>
    </main>
  )
}
