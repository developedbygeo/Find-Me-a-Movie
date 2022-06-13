export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getTrendingMovies = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_KEY}`);
  return res.json();
};
