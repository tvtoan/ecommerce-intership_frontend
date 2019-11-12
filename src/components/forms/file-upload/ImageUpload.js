// core
import React, { useContext } from "react";
// components
import ImagePreview from "./ImagePreview";
import ImageSelect from "./ImageSelect";
// context
import { FileUploadContext } from "./context/FileUploadContext";

export default function ImageUpload(props) {
  // files: [addedFiles, setAddFiles]
  const {
    files: [addedFiles],
    info: { note, validateMessage },
    maxUpload
  } = useContext(FileUploadContext);

  return (
    <div className="image-upload-wrapper">
      <div className="image-upload__list">
        {addedFiles.map(item => {
          const keyList = item.file.name.concat("#" + item.location.toString());
          return (
            <div key={keyList} className="image-upload__list-item">
              <ImagePreview dataFile={item} />
            </div>
          );
        })}
        {addedFiles.length < maxUpload && (
          <div className="image-upload__list-item">
            <ImageSelect />
          </div>
        )}
      </div>
      {note && <span className="file-upload__note">{note}</span>}
      {validateMessage && (
        <div className="invalid-feedback">{validateMessage}</div>
      )}
    </div>
  );
}
