export default async function handler(req, res) {
  const { id, platform } = req.query;

  if (req.method === 'GET') {
    try {
      const responses = await Promise.all([
        await fetch(
          `https://api.themoviedb.org/3/${platform}/${id}/external_ids?api_key=${process.env.TMDB_KEY}&language=en-US`
        ),
        await fetch(
          `https://api.themoviedb.org/3/${platform}/${id}/videos?api_key=${process.env.TMDB_KEY}&language=en-US`
        ),
        await fetch(
          `https://api.themoviedb.org/3/${platform}/${id}/reviews?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        ),
      ]);
      if (!responses) {
        throw new Error('An error occurred while fetching data');
      }
      const externals = await responses[0].json();
      const videos = await responses[1].json();
      const reviews = await responses[2].json();
      return res.status(200).json({ externals, videos, reviews });
    } catch (err) {
      return res.status(500).json({
        errorUser: `Something went wrong when fetchind data. Please try again in a bit.`,
        errorDebug: `${err}`,
      });
    }
  }
}
