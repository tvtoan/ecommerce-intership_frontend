import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as IconSearch } from "assets/images/search.svg";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as Cart } from "assets/images/cart.svg";

import "./style.css";

export default class index extends Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="container header__top">
          <div className="header__top--left">
            <form action="" method="post" className="header__search">
              <input
                type="text"
                placeholder="Search"
                className="header__search-input-field"
              />
              <IconSearch className="header__search-icon" />
            </form>
          </div>
          <div className="header__top--center">
            <Logo />
          </div>
          <div className="header__top--right">
            <div className="auth">
              {/* <button className="flat-button auth__register">Register</button>
              <button className="flat-button auth__login">Log In</button> */}
              <div className="avatar-user">
                <img
                  src="https://www.alvinailey.org/sites/default/files/melanie-person.jpg"
                  alt="person-avatar"
                />
                <div className="avatar-user__dropdown">
                  <ul>
                    <li>
                      <button className="flat-button">Account setting</button>
                    </li>
                    <li>
                      <button className="flat-button">Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cart">
              <Cart />
              <span>7</span>
            </div>
          </div>
        </div>
        <div className="break--style1" />
        <div className="header__bottom">
          <div className="container">
            <nav className="nav--horizontal">
              <ul className="nav--horizontal__container">
                <li className="nav--horizontal__item">
                  <a href="#/">Men</a>
                  <FontAwesomeIcon
                    icon={["fas", "chevron-down"]}
                    className="nav--horizontal__item__icon"
                  />
                  <ul className="nav--horizontal__submenu">
                    <li className="nav--horizontal__item">
                      <a href="#/">Tops</a>
                    </li>
                    <li className="nav--horizontal__item">
                      <a href="#/">Bottoms</a>
                    </li>
                    <li className="nav--horizontal__item">
                      <a href="#/">Dresses</a>
                    </li>
                    <li className="nav--horizontal__item">
                      <a href="#/">Jackets</a>
                      {/* <ul className="nav--horizontal__submenu">
                        <li className="nav--horizontal__item"><a href="#/">Tops</a></li>
                        <li className="nav--horizontal__item"><a href="#/">Bottoms</a></li>
                        <li className="nav--horizontal__item"><a href="#/">Dresses</a></li>
                        <li className="nav--horizontal__item"><a href="#/">Jackets</a></li>
                        <li className="nav--horizontal__item"><a href="#/">Shoes</a></li>
                        <li className="nav--horizontal__item"><a href="#/">Accesories</a></li>
                        <li className="nav--horizontal__item"><a href="#/">Sale</a></li>
                        <li className="nav--horizontal__item"><a href="#/">Accesories 1</a></li>
                        <li className="nav--horizontal__item"><a href="#/">Sale 1</a></li>
                      </ul> */}
                    </li>
                    <li className="nav--horizontal__item">
                      <a href="#/">Shoes</a>
                    </li>
                    <li className="nav--horizontal__item">
                      <a href="#/">Accesories</a>
                    </li>
                    <li className="nav--horizontal__item">
                      <a href="#/">Sale</a>
                    </li>
                  </ul>
                </li>
                <li className="nav--horizontal__item">
                  <a href="#/">Ladies</a>
                  <FontAwesomeIcon
                    icon={["fas", "chevron-down"]}
                    className="nav--horizontal__item__icon"
                  />
                </li>
                <li className="nav--horizontal__item">
                  <a href="#/">Girls</a>
                  <FontAwesomeIcon
                    icon={["fas", "chevron-down"]}
                    className="nav--horizontal__item__icon"
                  />
                </li>
                <li className="nav--horizontal__item">
                  <a href="#/">Boys</a>
                  <FontAwesomeIcon
                    icon={["fas", "chevron-down"]}
                    className="nav--horizontal__item__icon"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
