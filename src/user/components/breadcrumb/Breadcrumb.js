import React from "react";
// styles
import "./style.scss";

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol className="breadcrumb__container">
        <li className="breadcrumb__item">
          <a href="#/">Home</a>
        </li>
        <li className="breadcrumb__item active" aria-current="page">
          Library
        </li>
      </ol>
    </nav>
  );
}
