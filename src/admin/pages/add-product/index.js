import React from "react";
import { ReactComponent as DropdownIcon } from "assets/images/seller/icons/dropdown.svg";
import { ReactComponent as MailIcon } from "assets/images/seller/icons/mail.svg";
import { ReactComponent as NotificationIcon } from "assets/images/seller/icons/notification.svg";
import "./style.scss";

import { SelectSingle, SelectMulti } from "components/forms/select";

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
        <form>
          <div className="form-group row">
            <label
              htmlFor="input-name_product"
              className="l12-col-sm-2 col-form-label"
            >
              name
            </label>
            <div className="l12-col-sm-8">
              <input
                type="text"
                className="form-control"
                id="input-name_product"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="input-categories"
              className="l12-col-sm-2 col-form-label"
            >
              categories
            </label>
            <div className="l12-col-sm-8">
              <SelectMulti menuIsOpen isSearchable={true} />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="input-brand"
              className="l12-col-sm-2 col-form-label"
            >
              brand
            </label>
            <div className="l12-col-sm-8">
              <SelectSingle isSearchable={false} />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="input-price"
              className="l12-col-sm-2 col-form-label"
            >
              price ($)
            </label>
            <div className="l12-col-sm-8">
              <input
                type="text"
                className="form-control"
                id="input-price"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="input-sizes"
              className="l12-col-sm-2 col-form-label"
            >
              sizes
            </label>
            <div className="l12-col-sm-8">
              <SelectMulti isSearchable={false} />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="input-colors"
              className="l12-col-sm-2 col-form-label"
            >
              colors
            </label>
            <div className="l12-col-sm-8">
              <SelectMulti isSearchable={false} />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="input-quantity"
              className="l12-col-sm-2 col-form-label"
            >
              quantity
            </label>
            <div className="l12-col-sm-8">
              <input
                type="text"
                className="form-control"
                id="input-quantity"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="input-description"
              className="l12-col-sm-2 col-form-label"
            >
              description
            </label>
            <div className="l12-col-sm-8">
              <textarea
                rows={4}
                className="form-control"
                id="input-description"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
