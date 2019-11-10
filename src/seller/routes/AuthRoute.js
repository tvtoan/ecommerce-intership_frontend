import React from "react";
// 3rd packages
import { Route } from "react-router-dom";
// layouts
import AuthLayout from "../layouts/AuthLayout";

export default function AuthRoute({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => (
        <AuthLayout>
          <Component {...routeProps} />
        </AuthLayout>
      )}
    />
  );
}
