import type { AppProps } from 'next/app';
import ErrorBoundary from "components/ErrorBoundary";
import "styles/styles.scss";
import Layout from 'components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
  )
}
