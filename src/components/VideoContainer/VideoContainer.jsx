import VideoItem from "../VideoItem/VideoItem";
import VideoDetails from "../VideoDetails/VideoDetails"
import './VideoContainer.scss'
import { useState, useEffect } from 'react'
import axios from "axios";
import { API_URL } from "../../../utils";
import { API_KEY } from "../../../utils";

import { NavLink, Link } from "react-router-dom";




function VideoContainer() {
  
  const [videoList, setVideoList] = useState([]);
  

  useEffect(() => {
    async function getVideo() {
      try {
        const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
       
       
        setVideoList(response.data)
      } catch (error) {
        console.log('API request error:\n', error)
      }
      
    }
 getVideo()  ;
  }, []);

  

  const filteredVideos = videoList.filter((video) => video.id !== videoList[0]?.id);



  if (!filteredVideos || filteredVideos.length === 0) {
    return (
      <p> Just a moment while we load the video details....</p>
    );
  };

  return (
    <>
      <h3 className="article__subheader">Next Videos</h3>
      {filteredVideos.map((video) => (
        <NavLink key={video.id} className="article" to={`/videos/${video.id}`}>
          <VideoItem {...video} />
        </NavLink>
      ))}
    </>
  );
}


export default VideoContainer;


