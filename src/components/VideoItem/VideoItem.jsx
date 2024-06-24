import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoItem.scss";

function VideoItem({ title, video, channel, image, videoId }) {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/videos/${videoId}`);
  };

  return (
    < main>
    
      <ul className="video__list_container">

      <li className="video" onClick={handleVideoClick}>
        <video className="video__thumbnail" poster={image} src={video}></video>
        <div className="video__info">
          <h3 className="video__title">{title}</h3>
          <p className="video__name">{channel}</p>
        </div>
      </li>
      </ul>
    </main>
  );
}

export default VideoItem;
