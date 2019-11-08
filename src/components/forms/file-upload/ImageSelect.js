import React, { useRef, useContext } from "react";
// context
import {FileUploadContext} from "./context/FileUploadContext";
// static resources
import { ReactComponent as AddIcon } from "assets/images/seller/icons/add.svg";

export default function ImageSelect(props) {
  const refInputFile = useRef();
  const {handleAddFile, filterType, multiple} = useContext(FileUploadContext);

  const handleFilterType = types => {
    let tmpTypes = types.map(type => '.' + type);
    return tmpTypes.join(',');
  }

  const handleSelectFile = e => {
    handleAddFile(e.target.files);
  };

  return (
    <div
      className="image-upload__select"
      onClick={() => refInputFile.current.click()}
    >
      <input
        type="file"
        name=""
        id=""
        style={{ display: "none" }}
        ref={refInputFile}
        onChange={handleSelectFile}
        accept={handleFilterType(filterType)}
        multiple={multiple}
      />
      <div className="image-upload__button">
        <AddIcon className="image-upload__button-icon" />
        <span className="image-upload__button-text">Add photo</span>
      </div>
    </div>
  );
}
