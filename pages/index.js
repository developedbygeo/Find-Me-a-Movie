import { getTrending } from '@/utils/api-utils';
import mockTrending from '@/mock/trending-data.json';

import Trending from '@/components/Content/Trending';
import List from '@/components/Content/List';
import { getTrendingSlice } from '@/utils/data-utils';
import { StyledLanding } from '@/styles/landing.styled';

const Home = ({ trending, restTrending }) => {
  return (
    <StyledLanding className="landing">
      <Trending trendingData={trending} />
      <List content={restTrending} title={'Recommended Content'} className="landing-recommended" />
    </StyledLanding>
  );
};

export const getStaticProps = async () => {
  // const trending = await getTrendingMovies();

  const initialData = mockTrending;
  const topTenTrending = getTrendingSlice(initialData.results, 0, 10);
  const restTrending = getTrendingSlice(initialData.results, 10);

  return {
    props: {
      trending: topTenTrending,
      restTrending,
    },
  };
};

Home.searchGeneric = true;

export default Home;
