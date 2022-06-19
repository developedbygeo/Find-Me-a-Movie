import { StyledPage } from '@/styles/content.styled';

import { fetcher } from '@/utils/api-utils';
import useSWR from 'swr';

const SeriesDetails = ({ id, platform }) => {
  const { data, error } = useSWR([`/api/details?platform=${platform}&id=${id}`], fetcher);

  // TODO implement loading and error states

  // if (!data) {
  //   return <p>Loading</p>;
  // }

  // if (error) {
  //   return <p>Oops, something went wrong</p>;
  // }

  return (
    <StyledPage>
      <h1>hello world</h1>
    </StyledPage>
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
