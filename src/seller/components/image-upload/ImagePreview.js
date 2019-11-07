import React, { useState, useEffect } from "react";
// 3rd packages
import PropTypes from "prop-types";
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
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handlePreview = async (file) => {
    let base64 = await getBase64(file);
    setPreviewVisible(true);
    setPreviewImage(base64);
  };

  useEffect(() => {
    console.log("props:", props.dataFile);
    handlePreview(props.dataFile);
  })

  return (
    <div className="image-upload__preview">
      <img src={previewImage} alt="file-name" />
      <span className="image-upload__preview-remove">
        <CloseIcon className="icons" />
      </span>
    </div>
  );
}

ImagePreview.propTypes = {
  dataFile: PropTypes.object
};
