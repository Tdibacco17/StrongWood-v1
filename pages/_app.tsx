import { ContactProvider } from '@/context/ContactContextProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import dotenv from "dotenv";
dotenv.config();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContactProvider>
      <Component {...pageProps} />
    </ContactProvider>
  )
}
