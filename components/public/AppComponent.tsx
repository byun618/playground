import type { AppProps } from 'next/app'

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default AppComponent
