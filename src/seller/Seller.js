import React from "react";
// 3rd packages
import { Switch, useRouteMatch } from "react-router-dom";
// routes
import PrivateRoute from "./routes/PrivateRoute";
import AuthRoute from "./routes/AuthRoute";
// pages
import LoginPage from "./pages/auth/LoginPage";
import ForgotPassPage from "./pages/auth/ForgotPassPage";
import AddProductPage from "./pages/add-product";
// styles
import "./Seller.style.scss";

export default function SellerWeb() {
  let match = useRouteMatch();

  return (
    <Switch>
      <PrivateRoute path={`${match.path}/products/add-product`} component={AddProductPage} />

      <AuthRoute path={`${match.path}/login`} component={LoginPage} />
      <AuthRoute path={`${match.path}/forgot-password`} component={ForgotPassPage} />
    </Switch>
  );
}
