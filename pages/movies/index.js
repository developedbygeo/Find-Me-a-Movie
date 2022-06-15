import { getPopularMovies } from '@/utils/api-utils';
import mockMovies from '@/mock/movie-data.json';

import { StyledPage } from '@/styles/content.styled';
import List from '@/components/Content/List';

const Movies = ({ movies }) => {
  return (
    <StyledPage>
      <List content={movies} title="Movies" ext={'movies'} />
    </StyledPage>
  );
};

export const getStaticProps = async () => {
  // const movies = await getPopularMovies();

  const movies = mockMovies;

  return {
    props: {
      movies: movies.results,
    },
  };
};

export default Movies;
