import { useState, useEffect } from 'react';
import useSWR from 'swr';

import { fetcher, setEndpointId } from '@/utils/api-utils';

const endpoints = {
  movie: '/api/movieDetails',
  tv: '/api/showDetails',
};

// TODO refactor this - hook should call the api with the proper args - see setEndpointId
const useCSR = (id, platform) => {
  const [movieExists, setMovieExists] = useState(false);
  const targetEndpoint = setEndpointId(endpoints[platform], id);
  const { data, error } = useSWR(targetEndpoint, fetcher);

  useEffect(() => {
    if (data) {
      setMovieExists(true);
    }
  }, [data]);

  return { movieExists, data };
};
