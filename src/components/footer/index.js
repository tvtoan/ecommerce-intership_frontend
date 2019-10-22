import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "assets/images/logo.svg";

import "./style.css";

export default class index extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer__top">
            <Logo />
            <nav className="nav--vertical">
              <ul className="nav--vertical__container">
                <li className="nav--vertical__item">
                  <a href="#/">Home</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Products</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Services</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">About us</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Help</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Contacts</a>
                </li>
              </ul>
            </nav>
            <ul className="social">
                <li className="social__item">
                  <a href="#/">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </li>
                <li className="social__item">
                  <a href="#/">
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                </li>
                <li className="social__item">
                  <a href="#/">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </li>
              </ul>
          </div>
          <div className="break--style2"></div>
          <div className="footer__bottom">
            <nav className="nav--vertical">
              <ul className="nav--vertical__container">
                <li className="nav--vertical__item">
                  <a href="#/">Home</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Products</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Services</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">About us</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Help</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Contacts</a>
                </li>
              </ul>
            </nav>
            <nav className="nav--vertical">
              <ul className="nav--vertical__container">
                <li className="nav--vertical__item">
                  <a href="#/">Privacy Policy</a>
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Terms &amp; Conditions</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    );
  }
}
