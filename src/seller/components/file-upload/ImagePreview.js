import React, { useState, useEffect, useContext } from "react";
// 3rd packages
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { FileUploadContext } from "./context/FileUploadContext";
// static resources
import { ReactComponent as CloseIcon } from "assets/images/seller/icons/close-1.svg";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

export default function ImagePreview(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState("");
  const {files: [, setAddedFiles]} = useContext(FileUploadContext);

  const handlePreview = async file => {
    getBase64(file)
      .then(result => {
        setPreviewImage(result);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  };

  const handleRemoveImage = () => {
    setAddedFiles();
  }

  useEffect(() => {
    handlePreview(props.dataFile);
  }, [props.dataFile]);

  return (
    <div className="image-upload__preview">
      {!isLoading ? (
        <>
          <img src={previewImage} alt={props.dataFile.name} className="image-upload__preview-image" />
          <span className="image-upload__preview-remove" onClick={handleRemoveImage}>
            <CloseIcon className="icons" />
          </span>
        </>
      ) : (
        <div className="image-upload__preview-loading">
          <FontAwesomeIcon icon={["fas", "spinner"]} spin/>
        </div>
      )}
    </div>
  );
}

ImagePreview.propTypes = {
  dataFile: PropTypes.object,
};
