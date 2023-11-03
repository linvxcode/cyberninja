import React from "react";

const Video = ({ Datas }: any) => {
  const ytTrailerUrl = Datas?.yt_trailer || "";
  const videoId = ytTrailerUrl ? ytTrailerUrl.split("v=")[1] : "";
  return (
    <div className="py-10">
      <iframe
        className="w-[100%] rounded-xl"
        width="400"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
