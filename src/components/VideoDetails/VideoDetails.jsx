// import React from "react";
// import viewsIcon from "../../assets/Icons/views.svg";
// import likesIcon from "../../assets/Icons/likes.svg";
// import "./VideoDetails.scss";
// import playIcon from "../../assets/Icons/play.svg";
// import fullscreenIcon from "../../assets/Icons/fullscreen.svg";
// import volumeupIcon from "../../assets/Icons/volume_up.svg";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import axios from "axios";

// import { API_URL } from "../../../utils";
// import { API_KEY } from "../../../utils";

// function VideoDetails(props) {
//   const { videoId } = useParams();

//   const [mainVideo, setmainVideo] = useState(null);

//   useEffect(() => {
//     async function getVideo() {
//       try {
//         const response = await axios.get(
//           `${API_URL}/videos/${videoId}/?api_key=${API_KEY}/`
//         );

//         setmainVideo(response.data);
//       } catch (error) {
//         console.log("API request error:\n", error);
//       }
//     }
//     getVideo();
//   }, [videoId]);

//   if (!mainVideo || mainVideo.length === 0) {
//     return <p> Just a moment while we load the video details....</p>;
//   }

//   const { image, video, channel, timestamp, description, title, views, likes } =
//     mainVideo;

//   const newTimestamp = new Date(timestamp).toLocaleDateString();

//   return (
//     <article className="mainvideo">
//       <div className="mainvideo__player--container">
//         <video className="mainvideo__player" poster={image} src={video}></video>
//         <div className="mainvideo__player--controlContainer">
//           <div className="mainvideo__player--controls">
//             {" "}
//             <img src={playIcon} alt="Play Icon" />
//           </div>
//           <div className="mainvideo__player--controls--scrub">
//             {" "}
//             <span className="mainvideo__player--controls--scrubline"></span>
//             <p>0:00/4:01</p>
//           </div>
//           <div className="mainvideo__player--controls">
//             {" "}
//             <img src={fullscreenIcon} alt="fullscreen Icon" />
//             <img src={volumeupIcon} alt="volume Icon" />
//           </div>
//         </div>

//         <div>
//           <h2> {title} </h2>
//           <div className="mainvideo__content">
//             <div className="mainvideo__content--one">
//               <h3 className="mainvideo__channel"> by {channel} </h3>
//               <p className="mainvideo__timestamp"> {newTimestamp} </p>
//             </div>
//             <div className="mainvideo__content--two">
//               <p className="mainvideo__content--info">
               
//                 <span>
                 
//                   <img src={viewsIcon} alt="Views Icon" />
//                 </span>
//                 {views}
//               </p>
//               <p className="mainvideo__content--info">
          
//                 <span>
              
//                   <img src={likesIcon} alt="likes Icon" />
//                 </span>
//                 {likes}
//               </p>
//             </div>
//           </div>
//           <p> {description} </p>
//           <h3>
//             <b>3 comments</b>
//           </h3>
//         </div>
//       </div>
//     </article>
//   );
// }

<<<<<<< Updated upstream
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
        <p>0:00/4:01</p>
      </div>
      <div className="mainvideo__player--controls">
        {" "}
        <img src={fullscreenIcon} alt="fullscreen Icon" />
        <img src={volumeupIcon} alt="volume Icon" />
      </div>
    </div>

    <div>
           <h2> {title} </h2>
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
      <h3><b>3 comments</b></h3> 
      </div>
  </div>
  </article>

  );
}

export default VideoDetails;
=======
// export default VideoDetails;
>>>>>>> Stashed changes
