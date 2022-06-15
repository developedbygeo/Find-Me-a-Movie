import { getPopularTV } from '@/utils/api-utils';
import mockSeries from '@/mock/series-data.json';

import { StyledPage } from '@/styles/content.styled';
import List from '@/components/Content/List';

const TvSeries = ({ shows }) => {
  return (
    <StyledPage>
      <List content={shows} title="TV Series" ext="tv-series" />
    </StyledPage>
  );
};

export const getStaticProps = async () => {
  // const movies = await getPopularMovies();

  const shows = mockSeries;

  return {
    props: {
      shows: shows.results,
    },
  };
};

export default TvSeries;
