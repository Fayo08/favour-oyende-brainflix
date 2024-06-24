import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
// import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const intialValues = {
    title: "",
    description: "",
  };
  
  const [mainVideo, setmainVideo] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [values, setValues] = useState(intialValues);

  const API_URL = "http://localhost:8080";

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${API_URL}/videos`);
      console.log(response.data[0]);
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

  // const isFormValid = () => {
  //   if (title === "" || description === "") {
  //     return false;
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API_URL + "/videos", {
        title: values.title,
        description: values.description,
      });
      setValues({ title: "", description: "" });

      console.log(API_URL + "/videos");
      console.log(e.target.name.value);

      await fetchVideos();

      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Homepage videoList={videoList} mainVideo={mainVideo}  fetchVideosbyId={fetchVideosbyId} />}
          />
          <Route
            path="/upload"
            element={
              <VideoUploadPage
                values={values}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
              />
            }
          />
          <Route path="/videos/:videoId" element={<Homepage videoList={videoList} mainVideo={mainVideo} fetchVideosbyId ={fetchVideosbyId} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
