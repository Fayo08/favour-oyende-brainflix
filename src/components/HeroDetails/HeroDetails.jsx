import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

import React from "react";
import "./HeroDetails.scss";

function HeroDetails({ mainVideo }) {
  const { channel, timestamp, description, title, views, likes } = mainVideo;
 

  const newTimestamp = new Date(timestamp).toLocaleDateString();
  return (
    <main className="mainvideo-container">
      <h2 className="mainvideo__title"> {title} </h2>
      <div className="mainvideo__content">
        <div className="mainvideo__content1">
          <h3 className="mainvideo__channel"> By {channel} </h3>
          <p className="mainvideo__timestamp"> {newTimestamp} </p>
        </div>
        <div className="mainvideo__content2">
          <p className="mainvideo__contentInfo">
            <span>
              <img src={viewsIcon} alt="Views Icon" />
            </span>
            {views}
          </p>
          <p className="mainvideo__contentInfo">
            <span>
              <img src={likesIcon} alt="likes Icon" />
            </span>
            {likes}
          </p>
        </div>
      </div>
      <p> {description} </p>
      <h3 className="mainvideo__comments">3 comments</h3>
    </main>
  );
}

export default HeroDetails;
