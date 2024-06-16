import React from 'react';
import viewsIcon from '../../assets/Icons/views.svg'
import likesIcon from '../../assets/Icons/likes.svg'
function HeroDetails(props) {
    const {video, title, channel,  description, views, likes, timestamp, image, comments  } = props

    const newTimestamp = new Date (timestamp).toLocaleDateString();
    return (
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
    );
}

export default HeroDetails;