import React from "react";
// Static resources
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as OverviewIcon } from "assets/images/seller/icons/overview-dark.svg";
import { ReactComponent as OrderIcon } from "assets/images/seller/icons/orders-dark.svg";
import { ReactComponent as ProductIcon } from "assets/images/seller/icons/products-dark.svg";
import { ReactComponent as PaymentIcon } from "assets/images/seller/icons/payment-dark.svg";
import { ReactComponent as PromotionIcon } from "assets/images/seller/icons/promotion-dark.svg";
import { ReactComponent as SettingIcon } from "assets/images/seller/icons/setting-dark.svg";
// styles
import './styles.scss';

export default function Sidebar() {
  return (
    <aside className="sidebar-left">
      <div className="sidebar-left__brand">
        <div className="sidebar-left__brand-logo">
          <a href="#/">
            <Logo />
          </a>
        </div>
      </div>
      <div className="sidebar-left__menu-wrapper">
        <nav className="sidebar-left__menu">
          <ul>
            <li className="sidebar-left__menu-item active">
              <a href="#/" className="sidebar-left__menu-item__link">
                <OverviewIcon className="sidebar-left__menu-item__link-icon" />
                <span className="sidebar-left__menu-item__link-name">
                  Overview
                </span>
              </a>
            </li>
            <li className="sidebar-left__menu-item">
              <a href="#/" className="sidebar-left__menu-item__link">
                <OrderIcon className="sidebar-left__menu-item__link-icon" />
                <span className="sidebar-left__menu-item__link-name">
                  Orders
                </span>
              </a>
            </li>
            <li className="sidebar-left__menu-item">
              <a href="#/" className="sidebar-left__menu-item__link">
                <ProductIcon className="sidebar-left__menu-item__link-icon" />
                <span className="sidebar-left__menu-item__link-name">
                  Products
                </span>
              </a>
            </li>
            <li className="sidebar-left__menu-item">
              <a href="#/" className="sidebar-left__menu-item__link">
                <PaymentIcon className="sidebar-left__menu-item__link-icon" />
                <span className="sidebar-left__menu-item__link-name">
                  Payments
                </span>
              </a>
            </li>
            <li className="sidebar-left__menu-item">
              <a href="#/" className="sidebar-left__menu-item__link">
                <PromotionIcon className="sidebar-left__menu-item__link-icon" />
                <span className="sidebar-left__menu-item__link-name">
                  Promotions
                </span>
              </a>
            </li>
            <li className="sidebar-left__menu-item">
              <a href="#/" className="sidebar-left__menu-item__link">
                <SettingIcon className="sidebar-left__menu-item__link-icon" />
                <span className="sidebar-left__menu-item__link-name">
                  Setting
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
