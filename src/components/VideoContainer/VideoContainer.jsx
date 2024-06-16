import VideoItem from "../VideoItem/VideoItem";
import VideoDetails from "../VideoDetails/VideoDetails"
import './VideoContainer.scss'
import { useState, useEffect } from 'react'
import axios from "axios";
import { API_URL } from "../../../utils";
import { API_KEY } from "../../../utils";
import { NavLink, Link } from "react-router-dom";




function VideoContainer() {
  
  const [mainVideo, setmainVideo] = useState([]);
  

  useEffect(() => {
    async function getVideo() {
      try {
        const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
        console.log(response)

        const videosArray = response.data
        console.log(`videoes array`, videosArray)

    
         setmainVideo(videosArray)
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

    return (
      <>
<h3 className="article__subheader" >Next Videos</h3>

{mainVideo.map((video)=>{


//dont forget to add classname
  return(<NavLink > 

    <VideoItem  
   
    className="article"  
  key={video.id} to ={`/videos/${video.id}`}
  {...video}
  
  // handleClick = {handleClick}
  
  
  />
  </NavLink>

)})}
     
     </>   

    )
  }

export default VideoContainer;