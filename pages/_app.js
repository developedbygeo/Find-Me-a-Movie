import Layout from '@/UI/Layout';
import BackButton from '@/components/UI/BackButton';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {Component.backButton && <BackButton />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
