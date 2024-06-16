import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "../../../utils";
import { API_KEY } from "../../../utils";
import React from "react";
import Hero from "../../components/Hero/Hero";
import HeroDetails from "../../components/HeroDetails/HeroDetails";
import Comments from '../../components/Comments/Comments';
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import videoDetailsData from "../../assets/Data/video-details.json";


function Homepage(props) {


//     const {videoId} = useParams()
//     const [mainVideo, setmainVideo] = useState([]);
    
  
//     useEffect(() => {
//       async function getVideo() {
//         try {
//           const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}/lookup.php?i=${videoId}`);
//           console.log(response)
  
//           const videosArray = response.data[0]
//           console.log(`videoes array`, videosArray)
  
      
//            setmainVideo({videosArray})
//         } catch (error) {
//           console.log('API request error:\n', error)
//         }
        
//       }
//    getVideo()  ;
//     }, [videoId]);
  
//     if (!mainVideo) {
//       return (
//         <p> Just a moment while we load the video details....</p>
//       );
//     }


//   const videoToDisplay = videosArray.find(
//     (video) => video.id === mainVideo );


// const filteredVideos = videosArray.filter(
//         (video) => video.id !== mainVideo
//       );

//   // console.log('Select video: ', videoTitle);
//   const videoToSelect = videoDetailsData

//   // console.log('video to select: ', videoToSelect);
  
  

//   const handleClick = (id) =>{
//     console.log('child handler')
//     setmainVideo(id)
//   }

  return (
    <main>
     <Hero 
 
       />
      
      <HeroDetails 
 
       />

      <Comments
      
         />
      <VideoContainer
        // videoToSelect={videoToSelect}
        // handleClick = {handleClick}
        // filteredVideos={filteredVideos}
        
      /> 
    </main>
  );
}

export default Homepage;
