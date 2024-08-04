// const ytdl=require('ytdl-core');
const ytdl = require("@distube/ytdl-core");

// linkGenerate.js


 const getYoutubeVideoUrl = async (videoId) => {
  try {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    const info = await ytdl.getInfo(url);
    const formats = info.player_response.streamingData.formats;

    if (!formats || formats.length === 0) {
      console.error('No available formats found.');
      return null;
    }

    const highestQualityFormat = formats[formats.length - 1];
    const videoUrl = highestQualityFormat.url;

    return videoUrl;
  } catch (error) {
    console.error('Error getting video URL:', error.message);
    return null;
  }
};
module.exports={getYoutubeVideoUrl};
