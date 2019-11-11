import React from "react";
// components
import Sidebar from "../components/sidebar";
import HeaderPage from "../containers/HeaderPageContainer";
import Breadcrumb from "../components/breadcrumb";
// styles
import "./PrivateLayout.style.scss";

export default function PrivateLayout(props) {
  return (
    <div className="seller-web">
      <Sidebar />
      <main className="main">
        <HeaderPage />
        <Breadcrumb />
        {props.children}
      </main>
    </div>
  );
}
