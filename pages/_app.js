import Layout from '@/UI/Layout';
import Search from '@/components/UI/Search/Search';
import BackButton from '@/components/UI/BackButton';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {Component.backButton && <BackButton />}
      {Component.searchGeneric ? <Search showCategories /> : <Search />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
