import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { upload } from '../../../modules/upload/uploadFiles'

const UploadVideo = () => {
  const [fileSelected, setFileSelected] = useState(false);

  return (
    <div>
            <div>
              <h2>Upload Video</h2>
            </div>
            <div>
                <CloseIcon id="closeIcon" />
            </div>
            <div id={fileSelected ? "Selected" : ""}>
                <h4>Upload A Video From Your Computer</h4>
                <input
                  type="file"
                  id="uploadInput"
                  accept="video/mp4"
                  style={{ display: "none" }}
                  onChange={(e) => {upload(e.target.files)}}
                />
                <div id="uploadButton">
                  <label htmlFor="uploadInput">SELECT FILE</label>
                </div>
            </div>
      </div>
  );
};

export default UploadVideo;