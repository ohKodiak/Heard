import express from 'express';
import request from 'request'; // Note: Consider using a library that supports ESM like 'node-fetch' or 'axios' if you face issues with 'request'.
import open from 'open';
import { Buffer } from 'buffer'; // Node.js global Buffer is available as a named import

const app = express();
const CLIENT_ID = '2a34e0fc18c545e68cc83abe320a2a7f';
const CLIENT_SECRET = '586b247ccb0042fa9da39312a35e9312';
const REDIRECT_URI = 'http://localhost:8888/callback';
const PORT = 8888;

app.get('/login', function(req, res) {
  const scopes = 'user-read-playback-state';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + CLIENT_ID +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(REDIRECT_URI));
});

app.get('/callback', function(req, res) {
  const code = req.query.code || null;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;

      const options = {
        url: 'https://api.spotify.com/v1/me/player/currently-playing',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
      };

      request.get(options, function(error, response, body) {
        if (body && body.item) {
          const trackName = body.item.name;
          const artistName = body.item.artists[0].name;
          const albumName = body.item.album.name;
          res.send(`Track: ${trackName}<br>Artist: ${artistName}<br>Album: ${albumName}`);
        } else {
          res.send("Nothing is currently playing.");
        }
      });

    } else {
      res.send("Invalid token");
    }
  });
});

app.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
  await open(`http://localhost:${PORT}/login`);
});
