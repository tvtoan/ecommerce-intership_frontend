import React, { Component } from "react";
import banner1 from "assets/images/web/banner-1.jpg";
import banner2 from "assets/images/web/banner-2.jpg";
import banner3 from "assets/images/web/banner-3.jpg";
import banner4 from "assets/images/web/banner-4.jpg";
import banner5 from "assets/images/web/banner-5.jpg";
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner--style-1">
          <img src={banner1} alt="banner" className="banner__image" />
          <h1 className="banner__name">Outfit of the week</h1>
          <button className="flat-button banner__btn">Shop now</button>
        </div>
        <div className="banner--style-2">
          <img src={banner2} alt="banner" className="banner__image" />
          <h1 className="banner__name">Men</h1>
          <button className="flat-button banner__btn">Shop now</button>
        </div>
        <div className="banner--style-2">
          <img src={banner3} alt="banner" className="banner__image" />
          <h1 className="banner__name">Ladies</h1>
          <button className="flat-button banner__btn">Shop now</button>
        </div>
        <div className="banner--style-2">
          <img src={banner4} alt="banner" className="banner__image" />
          <h1 className="banner__name">Girls</h1>
          <button className="flat-button banner__btn">Shop now</button>
        </div>
        <div className="banner--style-2">
          <img src={banner5} alt="banner" className="banner__image" />
          <h1 className="banner__name">Boys</h1>
          <button className="flat-button banner__btn">Shop now</button>
        </div>
      </div>
    );
  }
}
