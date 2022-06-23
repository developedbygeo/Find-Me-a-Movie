import data from '@/mock/tv-series-details.json';
import externals from '@/mock/externals-tv-series.json';
import useSWR from 'swr';

import { StyledPage, StyledLoading } from '@/styles/content.styled';
import { fetcher } from '@/utils/api-utils';
import Description from '@/components/Details/Description';
import FeaturedImage from '@/components/Details/FeaturedImage';
import ExternalLinks from '@/components/Details/ExternalLinks';

import { getDetailTitle } from '@/utils/data-utils';

import SeasonList from '@/components/Details/Shows/SeasonList';
import ErrorLoad from '@/components/UI/ErrorLoad';

// TODO adjust data to include externals
const SeriesDetails = ({ id, platform }) => {
  // const { data, error } = useSWR([`/api/details?platform=${platform}&id=${id}`], fetcher);

  const title = getDetailTitle(data, 'name', 'original_name');

  return (
    // <ErrorLoad error={error} data={data}>
    <ErrorLoad error={undefined} data={1}>
      <FeaturedImage backdropURL={data.backdrop_path} title={title} />

      <Description
        title={title}
        tagline={data.tagline}
        overview={data.overview || ''}
        rating={data.vote_average}
        genres={data.genres}
      />
      <ExternalLinks links={externals} />
      <SeasonList title={title} seasons={data.seasons} />
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
