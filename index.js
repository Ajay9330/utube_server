// app.js
const express = require('express');
const cors = require('cors');
const { getYoutubeVideoUrl } = require('./linkGenerate'); // Assuming linkGenerate.js is in the same directory

const app = express();
app.use(cors());

app.get('/video', async (req, res) => {
    try {
      const videoId = req.query.vid;
      console.log(videoId);
      const videoUrl = await getYoutubeVideoUrl(videoId);
    if (videoUrl) {
        console.log(videoUrl);
      res.json({ url: videoUrl }); // Corrected syntax here
    } else {
      res.status(500).send('Failed to retrieve video URL.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
