import tvLookup from '@/data/tvLookup';
import movieLookup from '@/data/movieLookup';

export const getAmbiguousProperty = (...args) => args.find((arg) => arg);

export const getTopTenMovies = (arr) => arr.slice(0, 10);

export const getImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;
// export const getImage = (path) => `https://image.tmdb.org/t/p/original${path}`;

export const getGenre = (id, platform) => {
  if (platform === 'tv') {
    return tvLookup.find((genre) => genre.id === id).name;
  }
  return movieLookup.find((genre) => genre.id === id).name;
};

export const getDate = (date) => new Date(date).getFullYear();

export const getSlug = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getParsedMovie = (imagePartialPath, genreCode, platform, dateStr, titleStr) => {
  const image = getImage(imagePartialPath);
  const genre = getGenre(genreCode, platform);
  const date = getDate(dateStr);
  const slug = getSlug(titleStr);

  return { image, genre, date, slug };
};
