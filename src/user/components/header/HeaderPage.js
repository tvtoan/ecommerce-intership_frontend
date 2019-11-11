import React from "react";
// 3rd packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
// static resources
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as SearchIcon } from "assets/images/shop/icons/search.svg";
import { ReactComponent as CartIcon } from "assets/images/shop/icons/cart.svg";
import product1 from "assets/images/shop/product-1.jpeg";
import product2 from "assets/images/shop/product-2.jpeg";
import avatarPlacholder from "assets/images/profile-placeholder.jpeg";

import "./style.scss";

const handleLogout = async (cb, ...[history]) => {
  try {
    await cb();
    history.push("/");
  } catch (error) {
    console.error("[LOGOUT]:", error);
  }
};

export default function HeaderPage(props) {
  let history = useHistory();

  return (
    <header className="shop-header container-fluid">
      <div className="container shop-header__top">
        <div className="shop-header__top--left">
          <form action="" method="post" className="shop-header__search">
            <input
              type="text"
              placeholder="Search"
              className="shop-header__search-input"
            />
            <SearchIcon className="shop-header__search-icon" />
          </form>
        </div>
        <div className="shop-header__top--center">
          <Logo />
        </div>
        <div className="shop-header__top--right">
          <div className="shop-header__top--right__item">
            <div className="auth">
              {!props.isAuthenticated ? (
                <>
                  <button
                    className="flat-button auth__register"
                    onClick={() => props.setShowRegisterModal(true)}
                  >
                    Register
                  </button>
                  <button
                    className="flat-button auth__login"
                    onClick={() => props.setShowLoginModal(true)}
                  >
                    Log In
                  </button>
                </>
              ) : (
                <div className="auth__avatar-user">
                  <img
                    src={
                      props.userInfo.avatar
                        ? props.userInfo.avatar
                        : avatarPlacholder
                    }
                    alt="person-avatar"
                  />
                  <div className="auth__avatar-user__dropdown">
                    <ul>
                      <li className="auth__avatar-user__dropdown-item">
                        <Link to="/account" className="auth__avatar-user__link">
                          Account setting
                        </Link>
                      </li>
                      <li className="auth__avatar-user__dropdown-item">
                        <Link
                          to="/logout"
                          className="auth__avatar-user__link"
                          onClick={e => {
                            e.preventDefault();
                            handleLogout(props.handleLogout, history);
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="shop-header__top--right__item cart">
            <Link to="/cart" className="cart__btn">
              <CartIcon className="icons" />
              <span>7</span>
            </Link>
            <div className="cart__dropdown">
              <ul>
                <li className="cart__dropdown__item">
                  <a href="#/">
                    <div className="cart__dropdown__item__image">
                      <img src={product1} alt="" />
                    </div>
                    <div className="cart__dropdown__item__info">
                      <h3 className="cart__dropdown__item__info__name-product">
                        new balance men's street backpack
                      </h3>
                      <span className="cart__dropdown__item__info__price">
                        $485
                      </span>
                      <div className="cart__dropdown__item__info__detail">
                        <span className="size">S</span>
                        <span className="color">Black</span>
                        <span className="quantity">1 pcs</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="cart__dropdown__item">
                  <a href="#/">
                    <div className="cart__dropdown__item__image">
                      <img src={product2} alt="" />
                    </div>
                    <div className="cart__dropdown__item__info">
                      <h3 className="cart__dropdown__item__info__name-product">
                        lyle &amp; scott men's short sleeve camo pocket
                      </h3>
                      <span className="cart__dropdown__item__info__price">
                        $85
                      </span>
                      <div className="cart__dropdown__item__info__detail">
                        <span className="size">XXL</span>
                        <span className="color">White</span>
                        <span className="quantity">3 pcs</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="#/" className="cart__dropdown__view-cart">
                View cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="break--style1" />
      <div className="shop-header__bottom">
        <div className="container full-height">
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
