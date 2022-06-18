// import useSWR from 'swr';
// import { fetcher } from '@/utils/api-utils';

// TODO can only use 1 route with switch statements - see useCSR
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.body;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}anguage=en-US`
      );

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data = await res.json();
      return res.status(200).json({ data });
    } catch (err) {
      return res.status(500).json({ error: '500 - unable to fetch details' });
    }
  }
}
