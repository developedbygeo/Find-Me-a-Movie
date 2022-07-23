import { getPopularMovies, getUpcomingMovies } from '@/utils/api-utils';
import mockMovies from '@/mock/movie-data.json';
import mockUpcoming from '@/mock/movie-data-upcoming.json';

import useSWR from 'swr';
import { fetcher } from '@/utils/api-utils';

import { StyledPage } from '@/styles/content.styled';
import List from '@/components/Content/List';

const Movies = ({ movies, upcoming }) => {
  return (
    <StyledPage className="movies-og">
      <List content={movies} title="Popular now" ext={'/movies'} className="movies-list-cont" />
      <List content={upcoming} title="Upcoming" ext={'/movies'} className="movies-list-cont" />
    </StyledPage>
  );
};

export const getServerSideProps = async () => {
  // const movies = await getPopularMovies();
  // const upcoming = await getUpcomingMovies();

  const movies = mockMovies;
  const upcoming = mockUpcoming;

  return {
    props: {
      movies: movies.results,
      upcoming: upcoming.results,
    },
  };
};

Movies.simpleSearch = true;
Movies.defaultPlatformQuery = 'searchMovies';

export default Movies;
