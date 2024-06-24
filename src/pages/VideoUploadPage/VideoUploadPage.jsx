import VideoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import publishIcon from "../../assets/Icons/publish.svg";
import {  useState } from "react";
import axios from "axios";

import "./VideoUploadpage.scss";
function VideoUploadPage({}) {
  const API_URL = "http://localhost:8080";

  const intialValues = {
    title: "",
    description: "",
  };

  const [values, setValues] = useState(intialValues);

  

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
    <div className="videoUpload">
      <h1 className="videoUpload__title">Upload Video</h1>

      <div className="videoUpload__borders">
        <div className="" >
          <p className="videoUpload__thumbnail">VIDEO THUMBNAIL</p>

          <img
            src={VideoThumbnail}
            alt="Runner getting set"
            className="img_upload"
          />
        </div>
        <form action="" onSubmit={handleSubmit} className="videoUpload__form">
          <div className="videoUpload__formgroup">
            <label className="label" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleInputChange}
              value={values.title}
              className="videoUpload__form_control_1"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="videoUpload__formgroup">
            <label className="label" htmlFor="desc">
              ADD A VIDEO DESCRIPTION
            </label>
            <input
              type="text"
              name="description"
              onChange={handleInputChange}
              value={values.description}
              id="description"
              className="videoUpload__form_control_2"
              placeholder="Add a description to your video"
            />
          </div>

          <div className="videoUpload__buttons">

            <button type="submit" className="videoUpload__button">
              <span>
                <img
                  className="publish-icon"
                  src={publishIcon}
                  alt="publish Icon"
                />
              </span>
              PUBLISH{" "}
            </button>
      <div className="Cancel_button">CANCEL</div>

          </div>
        </form>
      </div>

    </div>
  );
}

export default VideoUploadPage;
