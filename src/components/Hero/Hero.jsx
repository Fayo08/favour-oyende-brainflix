import playIcon from "../../assets/Icons/play.svg";
import fullscreenIcon from "../../assets/Icons/fullscreen.svg";
import volumeupIcon from "../../assets/Icons/volume_up.svg";

import "./Hero.scss";
import { useState, useEffect,  } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils";
import { API_KEY } from "../../../utils";

import React from "react";

function Hero()

{
    const [mainVideo, setmainVideo] = useState([]);
  

    useEffect(() => {
      async function getVideo() {
        try {
          const response = await axios.get(`${API_URL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=${API_KEY}`);
          console.log(response.data)
         
           setmainVideo(response.data)
        } catch (error) {
          console.log('API request error:\n', error)
        }
        
      }
    getVideo()  ;
    }, []);
    
    if (!mainVideo || mainVideo.length === 0) {
      return (
        <p> Just a moment while we load the video details....</p>
      );
    }

    const {image, video, channel, timestamp, description, title, views, likes} = mainVideo

   const newTimestamp = new Date (timestamp).toLocaleDateString();


  return (
    <article className='mainvideo' >  
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
          <p className="mainvideo__player--controls--scrublines" >0:00/4:01</p>
        </div>
        <div className="mainvideo__player--controls">
          {" "}
          <img src={fullscreenIcon} alt="fullscreen Icon" />
          <img src={volumeupIcon} alt="volume Icon" />
        </div>
      </div>
      </div>

     
    </article>
  );
}

export default Hero;
