import { getPopularMovies } from '@/utils/api-utils';
import mockMovies from '@/mock/movie-data.json';

import { StyledPage } from '@/styles/content.styled';
import List from '@/components/Content/List';

const Movies = ({ movies }) => {
  return (
    <StyledPage className="movies-og">
      <List content={movies} title="Movies" ext={'/movies'} className="movies-list-cont" />
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

Movies.simpleSearch = true;
Movies.defaultPlatformQuery = 'searchMovies';

export default Movies;
