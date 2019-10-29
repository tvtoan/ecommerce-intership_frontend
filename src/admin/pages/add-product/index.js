import React from "react";
import { ReactComponent as DropdownIcon } from "assets/images/seller/dropdown.svg";
import { ReactComponent as MailIcon } from "assets/images/seller/mail.svg";
import { ReactComponent as NotificationIcon } from "assets/images/seller/notification.svg";
import "./style.scss";

import avatar from "assets/images/seller/avatar.jpg";

export default function AddProductPage() {
  return (
    <>
      <header>
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
    </>
  );
}
