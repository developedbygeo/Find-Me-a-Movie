import data from '@/mock/tv-series-details.json';
import externals from '@/mock/externals-tv-series.json';
import reviews from '@/mock/reviews-tv-series.json';
import video from '@/mock/video-tv-series.json';
import recommended from '@/mock/recommended-tv-shows.json';

import useSWR from 'swr';

import { StyledPage, StyledLoading } from '@/styles/content.styled';
import { fetcher } from '@/utils/api-utils';
import Description from '@/components/Details/Description';
import FeaturedImage from '@/components/Details/FeaturedImage';
import ExternalLinks from '@/components/Details/ExternalLinks';
import Reviews from '@/components/Content/Reviews';
import YoutubeVideo from '@/components/Details/YoutubeVideo';
import List from '@/components/Content/List';

import { getDetailTitle, getVideoId } from '@/utils/data-utils';

import SeasonList from '@/components/Details/Shows/SeasonList';
import ErrorLoad from '@/components/UI/ErrorLoad';

// TODO add recommended
const SeriesDetails = ({ id, platform }) => {
  // const { data, error } = useSWR([`/api/details?platform=${platform}&id=${id}`], fetcher);
  // const { data: optional, error } = useSWR([`/api/optionalDetails?platform=${platform}&id=${id}`], fetcher);
  // const { data: recommended, error } = useSWR([`/api/recommendations?platform=${platform}&id=${id}`], fetcher);

  const title = getDetailTitle(data, 'name', 'original_name');

  let videoId;
  let recommendedContent;

  if (video) videoId = getVideoId(video.results);
  if (recommended) recommendedContent = recommended.results.slice(0, 10);

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
      <YoutubeVideo videoId={videoId} title={title} />
      <Reviews reviewsArray={reviews.results} />
      <ExternalLinks links={externals} />
      <SeasonList title={title} showId={id} seasons={data.seasons} shouldHaveButtons />
      <List content={recommendedContent} title="You may also like..." titleAs="h3" className="recommended" />
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
