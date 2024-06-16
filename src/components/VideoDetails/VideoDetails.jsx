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
<article className='mainvideo' >   </article>
   

     
  



             

</>


  );
}

export default VideoDetails;