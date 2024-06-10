import React from 'react';
import './VideoItem.scss'


function VideoItem({ title, video, channel, poster, selectVideo}) {
    
    
    return (
        <li  className='video'>
        <video onClick ={()=> selectVideo(title)} className='video__thumbnail' poster={poster} src={video} ></video>
        <div className='video__info'>
      <h3 className='video__title' >{title}</h3 >
      <p  className='video__name' >{channel}</p>

      </div>
      
    </li>
    );
}

export default VideoItem;