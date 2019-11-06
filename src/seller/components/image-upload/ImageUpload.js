// core
import React, { useEffect } from "react";
// 3rd packages
import PropTypes from "prop-types";
// components
import ImagePreview from "./ImagePreview";
// static resources
import productCover from "assets/images/seller/product-1-cover.jpeg";
import productImage1 from "assets/images/seller/product-1-image.jpeg";
import { ReactComponent as AddIcon } from "assets/images/seller/icons/add.svg";

const imageBase64 =
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

const imageToBase64 = file => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return reader.result;
}

export default function ImageUpload(props) {
  useEffect(() => {
    console.log("Files:", props.droppedFiles);
    for (let file of props.droppedFiles) {
      // toBase64(file).then(result => {
      //   console.log("Base64:", result);
      // }).catch(err => console.log("Error:", err));
      console.log("Base64:", imageToBase64(file));
    }
  })

  return (
    <div className="image-upload-wrapper">
      <div className="image-upload__list">
        {props.droppedFiles.map(file => (
          <div key={file.name} className="image-upload__list-item">
            <ImagePreview image={imageToBase64(file)} />
          </div>
        ))}
        <div className="image-upload__list-item">
          <div className="image-upload__select">
            <input type="file" name="" id="" style={{ display: "none" }} />
            <div className="image-upload__button">
              <AddIcon className="image-upload__button-icon" />
              <span className="image-upload__button-text">Add photo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  droppedFiles: PropTypes.array
};
