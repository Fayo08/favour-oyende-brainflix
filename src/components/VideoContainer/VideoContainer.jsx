import VideoItem from "../VideoItem/VideoItem";
import "./VideoContainer.scss";
import { Link } from "react-router-dom";

function VideoContainer({ videoList, videoId }) {
  const filteredVideos = videoList.filter(
    (video) => video.id !== videoList[0]?.id
  );

  if (!filteredVideos || filteredVideos.length === 0) {
    return <p> Just a moment while we load the video details....</p>;
  }

  return (
    <>
      <main className="Next-videos-container">
        <h3 className="video_item__subheader">NEXT VIDEOS</h3>
        {filteredVideos.map((video) => (
          <Link key={video.id} className="video_item" to={`/videos/${video.id}`}>
            <VideoItem {...video} videoId={videoId} />
          </Link>
        ))}
      </main>
    </>
  );
}

export default VideoContainer;
