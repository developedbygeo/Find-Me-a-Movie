export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getTrending = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_KEY}`);
  return res.json();
};

export const getPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  );
  return res.json();
};

export const getPopularTV = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  );
  return res.json();
};
