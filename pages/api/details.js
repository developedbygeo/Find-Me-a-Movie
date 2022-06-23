export default async function handler(req, res) {
  const { id, platform } = req.query;
  if (req.method === 'GET') {
    try {
      const responses = await Promise.all([
        await fetch(
          `https://api.themoviedb.org/3/${platform}/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
        ),
        await fetch(
          `https://api.themoviedb.org/3/${platform}/${id}/external_ids?api_key=${process.env.TMDB_KEY}&language=en-US`
        ),
      ]);
      if (!responses) {
        throw new Error('An error occurred while fetching data');
      }
      const data = await responses[0].json();
      const externals = await responses[1].json();
      return res.status(200).json({ data, externals });
    } catch (err) {
      return res.status(500).json({
        errorUser: `Something went wrong when fetchind data. Please try again in a bit.`,
        errorDebug: `${err}`,
      });
    }
  }
}
