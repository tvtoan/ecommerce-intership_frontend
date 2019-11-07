// core
import React, {useContext} from "react";
// components
import ImagePreview from "./ImagePreview";
import ImageSelect from "./ImageSelect";
// context
import {FileUploadContext} from "./context/FileUploadContext";

export default function ImageUpload(props) {
  // files: [addedFiles, setAddFiles]
  const {files: [addedFiles]} = useContext(FileUploadContext);

  return (
    <div className="image-upload-wrapper">
      <div className="image-upload__list">
        {addedFiles.map(item => (
          <div key={item.file.name} className="image-upload__list-item">
            <ImagePreview dataFile={item} />
          </div>
        ))}
        <div className="image-upload__list-item">
          <ImageSelect />
        </div>
      </div>
    </div>
  );
}