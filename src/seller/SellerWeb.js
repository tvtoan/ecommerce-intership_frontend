import React from "react";
// 3rd packages
import { Switch, useRouteMatch } from "react-router-dom";
// routes
import PrivateRoute from "./containers/PrivateRouteContainer";
import AuthRoute from "./containers/AuthRouteContainer";
// pages
import LoginPage from "./containers/LoginPageContainer";
import ForgotPassPage from "./pages/auth/ForgotPassPage";
import AddProductPage from "./containers/AddProductPageContainer";
import DashboardPage from "./pages/dashboard/DashboardPage";
// styles
import "./SellerWeb.style.scss";

export default function SellerWeb() {
  let match = useRouteMatch();

  return (
    <Switch>
      <PrivateRoute
        path={`${match.path}/products/add-product`}
        component={AddProductPage}
      />
      <AuthRoute
        path={`${match.path}/forgot-password`}
        component={ForgotPassPage}
      />
      <AuthRoute path={`${match.path}/login`} component={LoginPage} />
      <PrivateRoute path={`${match.path}/`} component={DashboardPage} />
    </Switch>
  );
}
