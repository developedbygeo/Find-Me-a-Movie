// import useSWR from 'swr';
// import { fetcher } from '@/utils/api-utils';

import movieData from '@/mock/search-data-movies.json';
import tvData from '@/mock/search-data-tv.json';

import ErrorLoad from '@/components/UI/ErrorLoad';
import List from '@/components/Content/List';

const Search = ({ title, platform }) => {
  // const { data, error } = useSWR([`/api/getSearchResults?title=${title}&platform=${platform}`], fetcher);

  const data = platform === 'movie' ? movieData : tvData;

  const extension = platform === 'movie' ? '/movies' : '/tv-series';

  return (
    // <ErrorLoad error={error} data={data} className="search-og">
    <ErrorLoad error={undefined} data={data} className="search-og">
      {data && (
        <List
          content={data.data.results}
          title="Search Results"
          ext={extension}
          className="search-list-cont"
          isSearch
        />
      )}
    </ErrorLoad>
  );
};

export const getServerSideProps = async (ctx) => {
  const {
    query: { title, platform },
  } = ctx;

  return {
    props: {
      title,
      platform,
    },
  };
};

Search.searchGeneric = true;

export default Search;
