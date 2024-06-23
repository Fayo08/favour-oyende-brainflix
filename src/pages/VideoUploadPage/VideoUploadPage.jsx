import VideoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import publishIcon from "../../assets/Icons/publish.svg";

import "./VideoUploadpage.scss";
function VideoUploadPage({handleSubmit, title}) {
  return (
    <div className="video-upload-container">
      <h2 className="Upload_title">Upload Video</h2>

      <div className="borders">
        <div>
          <p className="Video_thumbnail">VIDEO THUMBNAIL</p>

          <img
            src={VideoThumbnail}
            alt="Runner getting set"
            className="img_upload"
          />
        </div>
        <form action="" className="form">
          <div className="form_group">
            <label className="label" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              className="form_control_1"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="form_group">
            <label className="label" htmlFor="desc">
              ADD A VIDEO DESCRIPTION
            </label>
            <input
              type="text"
              name="description"
              value={title}
              id="description"
              className="form_control_2"
              placeholder="Add a description to your video"
            />
          </div>
        </form>
      </div>
      <div className="buttons">
        <button onClick={handleSubmit} className="upload-button">
    
          <span>
            <img
              className="publish-icon"
              src={publishIcon}
              alt="publish Icon"
            />
          </span>
          PUBLISH
        </button>

        <div className="Cancel_button">CANCEL</div>
      </div>
    </div>
  );
}

export default VideoUploadPage;
