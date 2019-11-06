import React from 'react';
// static resources
import { ReactComponent as DropdownIcon } from "assets/images/seller/icons/dropdown.svg";
import { ReactComponent as MailIcon } from "assets/images/seller/icons/mail.svg";
import { ReactComponent as NotificationIcon } from "assets/images/seller/icons/notification.svg";
import avatar from "assets/images/seller/avatar.jpg";
// styles
import "./styles.scss";

export default function HeaderPage() {
  return (
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
  )
}
