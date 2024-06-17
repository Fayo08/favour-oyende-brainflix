import viewsIcon from '../../assets/Icons/views.svg'
import likesIcon from '../../assets/Icons/likes.svg'
import axios from "axios";
import { API_URL } from "../../../utils";
import { API_KEY } from "../../../utils";
import { useState, useEffect,  } from 'react'
import React from 'react';
import './HeroDetails.scss'

function HeroDetails(props) {

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
        
             <div  className='mainvideo-container'>
             <h2 className="mainvideo__title" > {title} </h2>
      <div className='mainvideo__content' >
        <div className='mainvideo__content--one' >
      <h3 className='mainvideo__channel'> by {channel} </h3>
      <p className='mainvideo__timestamp'> {newTimestamp} </p>
      </div>
      <div className='mainvideo__content--two'>
        <p className='mainvideo__content--info'> <span> <img src={viewsIcon} alt="Views Icon" /> </span> {views} </p>
        <p className='mainvideo__content--info'> <span> <img src={likesIcon} alt="likes Icon" /> </span> {likes} </p>
        </div>
        </div>
        <p> {description} </p> 
        <h3 className='mainvideo__comments'>3 comments</h3> 
        </div>
   
    );
}

export default HeroDetails;