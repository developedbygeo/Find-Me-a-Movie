export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, platform } = req.body;

    if (!title || !platform) return res.status(400).json({ error: 'Missing required fields' });

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${platform}?api_key=${process.env.TMDB_KEY}&query=${title}&language=en-US&page=1`
      );
      if (!response) {
        throw new Error('An error occurred while fetching data');
      }
      const data = await response.json();
      return res.status(200).json({ data });
    } catch (err) {
      return res.status(500).json({
        errorUser: `Something went wrong when fetchind data. Please try again in a bit.`,
        errorDebug: `${err}`,
      });
    }
  }
}
