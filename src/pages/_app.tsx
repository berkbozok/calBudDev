import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// ant design
import 'antd/dist/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
