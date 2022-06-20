import data from '@/mock/tv-series-details.json';
import useSWR from 'swr';

import { StyledPage, StyledLoading } from '@/styles/content.styled';
import { fetcher } from '@/utils/api-utils';
import Description from '@/components/Details/Description';
import FeaturedImage from '@/components/Details/FeaturedImage';

import { getDetailGenres, getDetailTitle } from '@/utils/data-utils';

// import LoadingSpinner from '@/components/UI/LoadingSpinner';
import ErrorLoad from '@/components/UI/ErrorLoad';

const SeriesDetails = ({ id, platform }) => {
  // const { data, error } = useSWR([`/api/details?platform=${platform}&id=${id}`], fetcher);
  const title = getDetailTitle(data, 'name', 'original_name');

  return (
    // <ErrorLoad error={error} data={data}>
    <ErrorLoad error={undefined} data={1}>
      <FeaturedImage backdropURL={data.backdrop_path} title={title} />
      <Description title={title} tagline={data.tagline} overview={data.overview || ''} genres={data.genres} />
    </ErrorLoad>
  );
};

export function getServerSideProps(ctx) {
  const {
    params: { id },
  } = ctx;

  return {
    props: {
      platform: 'tv',
      id,
    },
  };
}

export default SeriesDetails;
