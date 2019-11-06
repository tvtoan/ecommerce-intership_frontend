import React from "react";
// 3rd packages
import { Switch, Route } from "react-router-dom";
// styles
import "./seller-style.scss";
// Components
import Sidebar from "./components/sidebar";
import HeaderPage from "./components/header";
import Breadcrumb from "./components/breadcrumb";
// Pages
import AddProductPage from "./pages/add-product";

export default function SellerWeb() {
  return (
    <div className="seller-web">
      <Sidebar />
      <main className="main">
        <HeaderPage />
        <Breadcrumb />
        <Switch>
          <Route path="/add-product" component={AddProductPage} />
          {/* <Route path="/add-product" component={AddProductPage} /> */}
        </Switch>
        <AddProductPage />
      </main>
    </div>
  );
}
