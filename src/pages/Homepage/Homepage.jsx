import React from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import HeroDetails from "../../components/HeroDetails/HeroDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Homepage.scss";
import axios from "axios";
import Comments from "../../components/Comments/Comments";
import VideoContainer from "../../components/VideoContainer/VideoContainer";


function Homepage({}) {
  const API_URL = "http://localhost:8080";

  const { videoId } = useParams();

  const [mainVideo, setmainVideo] = useState([]);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    if (videoId) {
      fetchVideosbyId(videoId);
    }
  }, [videoId]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${API_URL}/videos`);
     
      setVideoList(response.data);
      setmainVideo(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideosbyId = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/videos/${id}`);
      setmainVideo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <main className="main">
      
      <MainVideo mainVideo={mainVideo} />
      <div className="Padding_homepage">
        <div className="hero-comments-container">
          <HeroDetails mainVideo={mainVideo} />

          <Comments mainVideo={mainVideo} />
        </div>
        <aside className="sidebar">
          <VideoContainer videoList={videoList} videoId={videoId} />
        </aside>
      </div>
    </main>
  );
}

export default Homepage;
