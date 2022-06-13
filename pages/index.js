import { getTrendingMovies } from '@/utils/api-utils';

import Trending from '@/components/Movie/Trending';
import Recommended from '@/components/Movie/Recommended';
import { getTopTenMovies, getParsedMovie } from '@/utils/data-utils';
import { StyledLanding } from '@/styles/landing.styled';
import mockTrending from '@/mock/trending-data.json';

export default function Home({ trending }) {
  return (
    <StyledLanding>
      {/* <StyledHeading>Hello World</StyledHeading> */}
      <Trending trendingData={trending} />
      <Recommended />
    </StyledLanding>
  );
}

export const getStaticProps = async () => {
  // const trending = await getTrendingMovies();

  const initialData = mockTrending;
  const trending = getTopTenMovies(initialData.results);

  return {
    props: {
      trending,
    },
  };
};
