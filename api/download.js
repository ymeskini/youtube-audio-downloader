const ytdl = require("ytdl-core");

export default function handler(req, res) {
  const {query, headers} = req;

  if (headers['API_TOKEN'] !== process.env['api_token']) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.writeHead(200, {
    "Content-Type": "application/octet-stream",
  });

  ytdl(query.id, {
    filter: "audioonly",
  }).pipe(res);
}
