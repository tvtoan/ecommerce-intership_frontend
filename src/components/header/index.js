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
        <div className="header__top container">
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
            <img
              src="https://www.alvinailey.org/sites/default/files/melanie-person.jpg"
              alt="person-avatar"
              className="avatar-user"
            />
            <div className="cart">
              <Cart />
              <span>7</span>
            </div>
          </div>
        </div>
        <div className="block-break" />
        <div className="header__bottom">
          <div className="container">
            <nav className="nav--vertical">
              <ul className="nav--vertical__container">
                <li className="nav--vertical__item">
                  <a href="#/">Men</a>
                  <FontAwesomeIcon
                    icon={["fas", "chevron-down"]}
                    className="nav--vertical__item__icon"
                  />
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Ladies</a>
                  <FontAwesomeIcon
                    icon={["fas", "chevron-down"]}
                    className="nav--vertical__item__icon"
                  />
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Girls</a>
                  <FontAwesomeIcon
                    icon={["fas", "chevron-down"]}
                    className="nav--vertical__item__icon"
                  />
                </li>
                <li className="nav--vertical__item">
                  <a href="#/">Boys</a>
                  <FontAwesomeIcon
                    icon={["fas", "chevron-down"]}
                    className="nav--vertical__item__icon"
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
