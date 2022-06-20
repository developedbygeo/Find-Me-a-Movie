export default async function handler(req, res) {
  const { id, platform } = req.query;
  if (req.method === 'GET') {
    try {
      const apiResponse = await fetch(
        `https://api.themoviedb.orgxxx/3/${platform}/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
      );

      if (!apiResponse.ok) {
        throw new Error(apiResponse.statusText);
      }

      const data = await apiResponse.json();
      return res.status(200).json({ data });
    } catch (err) {
      return res.status(500).json({
        errorUser: `Something went wrong when fetchind data. Please try again in a bit.`,
        errorDebug: `${err}`,
      });
    }
  }
}
