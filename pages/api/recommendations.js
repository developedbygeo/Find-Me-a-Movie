export default async function handler(req, res) {
  const { id, platform } = req.query;

  if (req.method === 'GET') {
    try {
      const recommended = await fetch(
        `https://api.themoviedb.org/3/${platform}/${id}/recommendations?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
      );

      if (!recommended.ok) {
        throw new Error('An error occurred while fetching recommendations');
      }

      const data = await recommended.json();
      return res.status(200).json({ data });
    } catch (err) {
      return res.status(500).json({
        errorUser: `Something went wrong when fetchind recommendations. Please try again in a bit.`,
        errorDebug: `${err}`,
      });
    }
  }
}
