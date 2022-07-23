import useSWR from 'swr';
import { fetcher } from '@/utils/api-utils';

import data from '@/mock/people-details.json';

import ErrorLoad from '@/components/UI/ErrorLoad';
import FeaturedImage from '@/components/Details/FeaturedImage';
import Description from '@/components/Details/Description';
import PeopleLinks from '@/components/Details/People/PeopleLinks';

import { getImage } from '@/utils/data-utils';

const PeopleDetails = ({ id }) => {
  const imagePath = data.profile_path && getImage(data.profile_path, 'w185');

  return (
    //   <ErrorLoad error={error} data={data}>
    <ErrorLoad error={undefined} data={1} className="person-details">
      <FeaturedImage
        placeholder="blur"
        backdropURL={imagePath || '/content/avatar-placeholder.png'}
        poster={imagePath}
        title={data.name || 'Unknown'}
        className="person-image"
      />
      <Description
        title={data.name || 'Actor'}
        tagline={(data.place_of_birth && `Born in ${data.place_of_birth}`) || ''}
        overview={data.biography || ''}
        className="person-description"
      />
      <PeopleLinks homepage={data.homepage} imdbId={data.imdb_id} className="people-links" />
    </ErrorLoad>
  );
};

PeopleDetails.backButton = true;

export default PeopleDetails;

export function getServerSideProps(ctx) {
  const {
    params: { id },
  } = ctx;

  return {
    props: {
      id,
    },
  };
}
