
import React from "react";
import Hero from "../../components/Hero/Hero";
import HeroDetails from "../../components/HeroDetails/HeroDetails";
import './Homepage.scss'
import Comments from '../../components/Comments/Comments';
import VideoContainer from "../../components/VideoContainer/VideoContainer";



function Homepage() {

  return (
    <main>
     <Hero 
  />
<div className="Padding_homepage">
  <div className="hero-comments-container">
<HeroDetails
  />
  
      <Comments 
  />
</div>
<div className="video-container" >
        
      <VideoContainer
 /> 
</div>
</div>

    </main>
  );
}

export default Homepage;
