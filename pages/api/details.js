export default async function handler(req, res) {
  const { id, platform } = req.query;
  if (req.method === 'GET' && platform === 'movie') {
    try {
      const apiResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
      );

      if (!apiResponse.ok) {
        throw new Error(apiResponse.statusText);
      }

      const data = await res.json();
      return res.status(200).json({ data });
    } catch (err) {
      return res.status(500).json({ error: '500 - unable to fetch movie details' });
    }
  } else {
    try {
      const apiResponse = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
      );

      if (!apiResponse.ok) {
        throw new Error(res.statusText);
      }

      const data = await apiResponse.json();
      return res.status(200).json({ data });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
}
