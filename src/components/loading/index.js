import React from 'react';
// 3rd packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import "./styles.scss";

export default function Loading() {
  return (
    <div className="loading">
      <FontAwesomeIcon className="icons" icon={['fas', 'spinner']} spin />
    </div>
  )
}
