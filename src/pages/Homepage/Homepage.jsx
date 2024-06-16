import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "../../../utils";
import { API_KEY } from "../../../utils";
import React from "react";
import Hero from "../../components/Hero/Hero";

import Comments from '../../components/Comments/Comments';
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import videoDetailsData from "../../assets/Data/video-details.json";


function Homepage(props) {

  
  

//   const handleClick = (id) =>{
//     console.log('child handler')
//     setmainVideo(id)
//   }

  return (
    <main>
     <Hero 
 
       />
      

      <Comments
      
         />
         
      <VideoContainer
    
        
      /> 
    </main>
  );
}

export default Homepage;
