import React from "react";
import { ReactComponent as DropdownIcon } from "assets/images/seller/dropdown.svg";
import { ReactComponent as MailIcon } from "assets/images/seller/mail.svg";
import { ReactComponent as NotificationIcon } from "assets/images/seller/notification.svg";
import "./style.scss";

import avatar from "assets/images/seller/avatar.jpg";

export default function AddProductPage() {
  return (
    <>
      <header className="header-wrapper">
        <div className="header__heading">
          <h1 className="header__heading__title">Add product</h1>
        </div>
        <div className="header__topbar">
          <div className="header__topbar-item header__topbar-item__user">
            <img src={avatar} alt="avatar-user" />
            <div className="header__topbar-item__user__block">
              <span className="header__topbar-item__user__fullname">
                lucile bush
              </span>
              <DropdownIcon className="icons" />
            </div>
          </div>
          <div className="header__topbar-item">
            <div className="header__topbar-item__block">
              <MailIcon className="icons" />
              <span className="badge">9+</span>
            </div>
          </div>
          <div className="header__topbar-item">
            <div className="header__topbar-item__block">
              <NotificationIcon className="icons" />
              <span className="badge">9+</span>
            </div>
          </div>
        </div>
      </header>
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
      <div className="container-fluid">
        <div className="row">
          <div className="color-col l12-col-sm-2">
            <label htmlFor="">photos</label>
          </div>
          <div className="color-col l12-col-sm-8">
            <div className="demo-form">
            <div className="Rectangle-4-Copy-2"></div>
            <div className="Rectangle-4-Copy-2"></div>
            <div className="Rectangle-4-Copy-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
