import React from "react";
// 3rd packages
import { Link, useHistory } from "react-router-dom";
// components
import Dropdown from "components/dropdown";
// static resources
import { ReactComponent as DropdownIcon } from "assets/images/seller/icons/dropdown.svg";
import { ReactComponent as MailIcon } from "assets/images/seller/icons/mail.svg";
import { ReactComponent as NotificationIcon } from "assets/images/seller/icons/notification.svg";
import { ReactComponent as ProfileIcon } from "assets/images/seller/icons/profile.svg";
import { ReactComponent as LogoutIcon } from "assets/images/seller/icons/logout.svg";
import avatar from "assets/images/seller/avatar.jpg";
// styles
import "./styles.scss";

const handleLogout = async (e, cb, ...[history]) => {
  try {
    e.preventDefault();
    await cb();
    history.push("/seller/");
  } catch (error) {
    console.error("[LOGOUT]:", error);
  }
};

export default function HeaderPage(props) {
  let history = useHistory();

  return (
    <header className="header-wrapper">
      <div className="header__heading">
        <h1 className="header__heading__title">Add product</h1>
      </div>
      <div className="header__topbar">
        <div className="header__topbar-item header__topbar-item__user">
          <img src={avatar} alt="avatar-user" />
          <Dropdown className="header__topbar-item__user-dropdown">
            <Dropdown.Toggle className="flat-button header__topbar-item__user-dropdown__toggle">
              <div className="header__topbar-item__user__block">
                <span className="header__topbar-item__user__fullname">
                  lucile bush
                </span>
                <DropdownIcon className="icons" />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu header__topbar-item__user-dropdown__menu">
              <ul>
                <li className="header__topbar-item__user-dropdown-item">
                  <Link
                    to="#/"
                    className="header__topbar-item__user-dropdown__link"
                  >
                    <ProfileIcon className="icons header__topbar-item__user-dropdown-item__icon" />
                    <span>View profile</span>
                  </Link>
                </li>
                <li className="header__topbar-item__user-dropdown-item">
                  <Link
                    to="/logout"
                    className="header__topbar-item__user-dropdown__link"
                    onClick={e => handleLogout(e, props.handleLogout, history)}
                  >
                    <LogoutIcon className="icons header__topbar-item__user-dropdown-item__icon" />
                    <span>Log out</span>
                  </Link>
                </li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>
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
  );
}
