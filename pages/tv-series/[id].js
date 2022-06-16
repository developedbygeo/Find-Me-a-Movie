import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { fetcher } from '@/utils/api-utils';
import useSWR from 'swr';

import { StyledPage } from '@/styles/content.styled';

const SeriesDetails = () => {
  const router = useRouter();
  const [movieDetails, setMovieDetails] = useState(null);
  console.log(router.query);

  return (
    <StyledPage>
      <h1>hello world</h1>
    </StyledPage>
  );
};

export default SeriesDetails;
