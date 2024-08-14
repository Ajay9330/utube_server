const ytdl=require('@distube/ytdl-core');

async function getDownloadUrlfromDistube(id){
    const data=await ytdl.getInfo(id);
    const url=data.formats.filter(
        function(obj){
            return (obj.hasAudio && obj.hasVideo);
        }
    )[0].url;
    console.log(url)

    return url;
}
module.exports={getDownloadUrlfromDistube};