import React from 'react';
import viewsIcon from '../../assets/Icons/views.svg'
import likesIcon from '../../assets/Icons/likes.svg'
import CommentItem from '../Comment Item/CommentItem';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import commentIcon from '../../assets/Icons/add_comment.svg'
import './VideoDetails.scss'
import playIcon from '../../assets/Icons/play.svg'
import fullscreenIcon from '../../assets/Icons/fullscreen.svg'
import volumeupIcon from '../../assets/Icons/volume_up.svg'



function VideoDetails(props) {
  const {video, title, channel,  description, views, likes, timestamp, image, comments  } = props

const newTimestamp = new Date (timestamp).toLocaleDateString();

  return (
<>
<article className='mainvideo' > 
      <div className='mainvideo__player--container'>
      <video className='mainvideo__player' poster= {image} src={video}></video>
      <div className='mainvideo__player--controlContainer'>
      <div className='mainvideo__player--controls'> <img src={playIcon} alt= "Play Icon" /></div>
      <div className='mainvideo__player--controls--scrub'> <span className='mainvideo__player--controls--scrubline'></span><p>0:00/4:01</p></div>
      <div className='mainvideo__player--controls'> <img src={fullscreenIcon }alt="fullscreen Icon" />
      < img src= {volumeupIcon} alt="volume Icon" />
     </div>
       </div>
      </div>

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
    </article>

<article className='articles'>
  
  < img  className='articles__avatar'src={avatar} alt = "Avatar"  />
  <div className='articles__comment'>
  <h3>JOIN THE CONVERSATION</h3>
  <textarea></textarea> 
  <button className='articles__button'><span> <img src={commentIcon} alt="Views Icon" /> </span>COMMENT</button>

  </div>
 

</article>

{comments.map((comment)=>
{
return(
  <CommentItem
  key = {comment.id}
  {...comment}
  />
)
}

)}
             

</>


  );
}

export default VideoDetails;