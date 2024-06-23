import VideoItem from "../VideoItem/VideoItem";
// import VideoDetails from "../VideoDetails/VideoDetails";
import "./VideoContainer.scss";
import { useState, useEffect } from "react";


import { NavLink } from "react-router-dom";

function VideoContainer({videoList}) {


  const filteredVideos = videoList.filter(
    (video) => video.id !== videoList[0]?.id
  );

  if (!filteredVideos || filteredVideos.length === 0) {
        return <p> Just a moment while we load the video details....</p>;
      }


  return (
    <>
      <div className="Next-videos-container">
        <h3 className="article__subheader">NEXT VIDEOS</h3>
        {filteredVideos.map((video) => (
          <NavLink
            key={video.id}
            className="article"
            to={`/videos/${video.id}`}
          >
            <VideoItem {...video} />
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default VideoContainer;
