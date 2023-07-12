import { ContactProvider } from '@/context/ContactContextProvider'
import '@/globals.css'
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContactProvider>
      <Component {...pageProps} />
    </ContactProvider>
  )
}
