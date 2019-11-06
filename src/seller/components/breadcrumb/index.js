import React from "react";
// styles
import './styles.scss';

export default function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol className="breadcrumb__container">
        <li className="breadcrumb__item">
          <a href="#/">Products</a>
        </li>
        <li className="breadcrumb__item active" aria-current="page">
          Add product
        </li>
      </ol>
    </nav>
  );
}
