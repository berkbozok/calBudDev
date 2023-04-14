import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// ant design
import 'antd/dist/reset.css'
import LayoutPage from '../../components/Layout/LayoutPage'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  )
}
