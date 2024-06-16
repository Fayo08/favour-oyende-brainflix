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
  const { videoId } = useParams(); 
  const [mainVideo, setmainVideo] = useState([]);


  useEffect(() => {
    async function getVideo() {
      try {
        const response = await axios.get(`${API_URL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=${API_KEY}/lookup.php?i=${videoId}`);
        console.log(response.data)
       
         setmainVideo(response.data)
      } catch (error) {
        console.log('API request error:\n', error)
      }
      
    }
  getVideo()  ;
  }, [videoId]);
  
  if (!mainVideo || mainVideo.length === 0) {
    return (
      <p> Just a moment while we load the video details....</p>
    );
  }

  const {image, video, channel, timestamp, description, title, views, likes} = mainVideo

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