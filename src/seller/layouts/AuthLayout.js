import React from "react";
// static resources
import backgroundAuth from "assets/images/seller/background-image-auth.jpg";
import backgroundAuth2x from "assets/images/seller/background-image-auth@2x.jpg";
import backgroundAuth3x from "assets/images/seller/background-image-auth@3x.jpg";
// styles
import "./AuthLayout.style.scss";

export default function AuthLayout(props) {
  return (
    <div className="auth-page">
      <img
        src={backgroundAuth}
        srcSet={`${backgroundAuth2x} 2x, ${backgroundAuth3x} 3x`}
        className="auth-page__background"
        alt=""
      />
      <div className="auth-page__content">
        <div className="auth-page__wrapper">
          {props.children}
        </div>
      </div>
    </div>
  );
}
