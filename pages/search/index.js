// import useSWR from 'swr';
// import { fetcher } from '@/utils/api-utils';

import movieData from '@/mock/search-data-movies.json';
import tvData from '@/mock/search-data-tv.json';

import ErrorLoad from '@/components/UI/ErrorLoad';
import List from '@/components/Content/List';

const Search = ({ search, platform }) => {
  //   const { data, error } = useSWR([`/api/getSearchResults?title=${search}&platform=${platform}`], fetcher);

  const data = platform === 'movie' ? movieData : tvData;

  const extension = platform === 'movie' ? '/movies' : '/tv-series';

  return (
    // <ErrorLoad error={error} data={data}>
    <ErrorLoad error={undefined} data={data} className="search-og">
      <List content={data.results} title="Search Results" ext={extension} className="search-list-cont" />
    </ErrorLoad>
  );
};

export const getServerSideProps = async (ctx) => {
  const {
    query: { search, platform },
  } = ctx;

  return {
    props: {
      search,
      platform,
    },
  };
};

Search.searchGeneric = true;

export default Search;
