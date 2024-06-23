import React from "react";

import Hero from "../../components/Hero/Hero";
import HeroDetails from "../../components/HeroDetails/HeroDetails";
import "./Homepage.scss";
import Comments from "../../components/Comments/Comments";
import VideoContainer from "../../components/VideoContainer/VideoContainer";

function Homepage({mainVideo, videoList }) {
 

  return (
    <main className="main">
      <Hero mainVideo={mainVideo} />
      <div className="Padding_homepage">
        <div className="hero-comments-container">
          <HeroDetails mainVideo={mainVideo} />

          <Comments mainVideo={mainVideo} />
        </div>
        <div className="video-container">
          <VideoContainer videoList={videoList} />
        </div>
      </div>
    </main>
  );
}

export default Homepage;
