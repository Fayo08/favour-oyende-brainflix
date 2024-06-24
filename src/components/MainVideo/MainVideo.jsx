
import "./MainVideo.scss";



import React from "react";

function MainVideo({mainVideo}) {


  if (!mainVideo || mainVideo.length === 0) {
    return <p> Just a moment while we load the video details....</p>;
  }

  const { image, video, timestamp } =
    mainVideo;



  return (
    <main className="mainvideo">
      <div className="mainvideo__player--container">
        <video
          className="mainvideo__player"
          controls
          poster={image}
          src={video}
        />
      </div>
    </main>
  );
}

export default MainVideo;
