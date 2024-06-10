import VideoItem from "../VideoItem/VideoItem";
import VideoDetails from "../VideoDetails/VideoDetails"
import './VideoContainer.scss'
import { useState } from 'react'
import CommentItem from "../Comment Item/CommentItem";


function VideoContainer({videoDetailsData}) {

    if (!Array.isArray(videoDetailsData)) {
        return <div>Invalid data format</div>;
      }


      const [mainVideo, setmainVideo] = useState(videoDetailsData)

      const selectVideo = (videoTitle) => {
     
    
        const videoToSelect = videoDetailsData.find((video) => {
          return video.title === videoTitle;
        });
       
        const filteredVideos = mainVideo.filter((video)=> video.title !== videoToSelect.title)
        
        setmainVideo([videoToSelect, ...filteredVideos]);
      }



const firstVideo = mainVideo.slice(0, 1)[0]
const restVideos = mainVideo.slice(1)

    return (
        <article className="article">
            <VideoDetails 
            {...firstVideo}
             />

            <h3 className="article__subheader" >Next Videos</h3>
            <ul className="article__list">
                { restVideos.map ((video) => {

                    return (
                      <VideoItem
                      selectVideo = {selectVideo}

                      key= {video.id} 
                      title= {video.title}
                      video= {video.video}
                      channel= {video.channel}
                      poster = {video.image}

                      />
                    )

                })}

            </ul>
        </article>
    );
}

export default VideoContainer;