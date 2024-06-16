import playIcon from "../../assets/Icons/play.svg";
import fullscreenIcon from "../../assets/Icons/fullscreen.svg";
import volumeupIcon from "../../assets/Icons/volume_up.svg";
import "./Hero.scss";

import React from "react";

function Hero({video,image, })

{
  return (
    <div className="mainvideo__player--container">
      <video className="mainvideo__player" poster={image} src={video}></video>
      <div className="mainvideo__player--controlContainer">
        <div className="mainvideo__player--controls">
          {" "}
          <img src={playIcon} alt="Play Icon" />
        </div>
        <div className="mainvideo__player--controls--scrub">
          {" "}
          <span className="mainvideo__player--controls--scrubline"></span>
          <p>0:00/4:01</p>
        </div>
        <div className="mainvideo__player--controls">
          {" "}
          <img src={fullscreenIcon} alt="fullscreen Icon" />
          <img src={volumeupIcon} alt="volume Icon" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
