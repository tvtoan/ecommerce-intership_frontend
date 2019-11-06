import React from "react";
// 3rd packages
import PropTypes from "prop-types";
// static resources
import { ReactComponent as CloseIcon } from "assets/images/seller/icons/close-1.svg";

export default function ImagePreview(props) {
  return (
    <div className="image-upload__preview">
      <img src={props.image} alt="file-name" />
      <span className="image-upload__preview-remove">
        <CloseIcon className="icons" />
      </span>
    </div>
  );
}

ImagePreview.propTypes = {
  image: PropTypes.string
};
