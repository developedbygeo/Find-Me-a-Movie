import tvLookup from '@/data/tvLookup';
import movieLookup from '@/data/movieLookup';

export const getAmbiguousProperty = (...args) => args.find((arg) => arg);

export const getTrendingSlice = (arr, start, end) => arr.slice(start, end);

export const getImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export const getGenre = (id, platform) => {
  if (!platform) return undefined;
  if (platform === 'tv') {
    return tvLookup.find((genre) => genre.id === id).name || '';
  }
  return movieLookup.find((genre) => genre.id === id).name || '';
};

export const getDate = (date) => new Date(date).getFullYear();

export const getSlug = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const formatPlatformName = (platform) =>
  platform === 'tv' ? platform.toUpperCase() : platform.charAt(0).toUpperCase() + platform.slice(1);

export const getParsedMovie = (imagePartialPath, genreCode, platformCode, dateStr, titleStr) => {
  const image = getImage(imagePartialPath);
  const genre = getGenre(genreCode, platformCode);
  const date = getDate(dateStr);
  const slug = getSlug(titleStr);
  let platform;
  if (platformCode) {
    platform = formatPlatformName(platformCode);
    return { image, genre, platform, date, slug };
  }
  return { image, genre, date, slug };
};
