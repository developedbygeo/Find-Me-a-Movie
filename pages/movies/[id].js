import data from '@/mock/movie-details.json';
import video from '@/mock/video-movie.json';
import reviews from '@/mock/reviews-movie.json';
import recommended from '@/mock/recommended-movie.json';
import credits from '@/mock/credits-movie.json';

import useSWR from 'swr';
import { fetcher } from '@/utils/api-utils';

import { StyledPage } from '@/styles/content.styled';
import Description from '@/components/Details/Description';
import FeaturedImage from '@/components/Details/FeaturedImage';
import Reviews from '@/components/Content/Reviews';
import YoutubeVideo from '@/components/Details/YoutubeVideo';
import MovieExtraInfo from '@/components/Details/Movies/MovieExtraInfo';
import List from '@/components/Content/List';

import { getDetailTitle, getVideoId } from '@/utils/data-utils';

import ErrorLoad from '@/components/UI/ErrorLoad';

const MovieDetails = ({ platform, id }) => {
  // TODO video is coming from the optionaldetails api route

  // const { data, error } = useSWR([`/api/details?platform=${platform}&id=${id}`], fetcher);
  // const { data: optional, error } = useSWR([`/api/optionalDetails?platform=${platform}&id=${id}`], fetcher);
  // const { data: recommended, error } = useSWR([`/api/recommendations?platform=${platform}&id=${id}`], fetcher);
  let videoId;
  let recommendedContent;
  const title = getDetailTitle(data, 'title', 'original_title');

  if (video) videoId = getVideoId(video.results);
  if (recommended) recommendedContent = recommended.results.slice(0, 10);

  return (
    <ErrorLoad error={undefined} data={1} className="movie-details">
      {/* <ErrorLoad error={error} data={data}> */}
      <FeaturedImage
        placeholder="blur"
        backdropURL={data.backdrop_path}
        poster={data.poster_path}
        title={title}
        className="detail-image"
      />
      <Description
        title={title}
        tagline={data.tagline}
        runtime={data.runtime}
        overview={data.overview || ''}
        rating={data.vote_average}
        votes={data.vote_count}
        genres={data.genres}
        cast={credits.cast}
        className="detail-description"
      />
      <MovieExtraInfo budget={data.budget} revenue={data.revenue} className="detail-movie-extra" />
      <YoutubeVideo videoId={videoId} title={title} className="detail-video" />
      <Reviews reviewsArray={reviews.results} className="detail-reviews" />
      <List
        content={recommendedContent}
        title="You may also like..."
        titleAs="h3"
        className="recommended detail-similar"
      />
    </ErrorLoad>
  );
};

export function getServerSideProps(ctx) {
  const {
    params: { id },
  } = ctx;

  return {
    props: {
      platform: 'movie',
      id,
    },
  };
}

export default MovieDetails;
