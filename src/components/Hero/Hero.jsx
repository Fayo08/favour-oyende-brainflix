
import "./Hero.scss";
import { useState, useEffect } from "react";
import axios from "axios";


import React from "react";

function Hero({mainVideo}) {


  if (!mainVideo || mainVideo.length === 0) {
    return <p> Just a moment while we load the video details....</p>;
  }

  const { image, video, timestamp } =
    mainVideo;



  return (
    <article className="mainvideo">
      <div className="mainvideo__player--container">
        <video
          className="mainvideo__player"
          controls
          poster={image}
          src={video}
        />
      </div>
    </article>
  );
}

export default Hero;
