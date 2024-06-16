import VideoItem from "../VideoItem/VideoItem";
import VideoDetails from "../VideoDetails/VideoDetails"
import './VideoContainer.scss'
import { useState, useEffect } from 'react'
import axios from "axios";
import { API_URL } from "../../../utils";
import { API_KEY } from "../../../utils";

import { NavLink, Link } from "react-router-dom";




function VideoContainer() {
  
  const [videoList, setvideoList] = useState([]);
  

  useEffect(() => {
    async function getVideo() {
      try {
        const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
        console.log(response)

        
       
        setvideoList(response.data)
      } catch (error) {
        console.log('API request error:\n', error)
      }
      
    }
 getVideo()  ;
  }, []);

  

  const filteredVideos = videoList.filter((video) => video.id !== '84e96018-4022-434e-80bf-000ce4cd12b8');
console.log(...filteredVideos);


  if (!filteredVideos || filteredVideos.length === 0) {
    return (
      <p> Just a moment while we load the video details....</p>
    );
  };

  return (
    <>
    <div>
      <h3 className="article__subheader">Next Videos</h3>
      {filteredVideos.map((video) => (
        <VideoItem
          key={video.id}
          className="article"
          to={`/videos/${video.id}`}
          {...video}
          // handleClick={handleClick}
        />
      ))}
      </div>
    </>
  );
}


export default VideoContainer;