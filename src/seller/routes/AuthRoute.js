import React from "react";
// 3rd packages
import { Route, Redirect } from "react-router-dom";
// layouts
import AuthLayout from "../layouts/AuthLayout";

export default function AuthRoute({ component: Component, ...props }) {
  // let match = useRouteMatch();
  // console.log("isAuthenticated:", props.isAuthenticated);
  return (
    <Route
      {...props}
      render={routeProps =>
        !props.isAuthenticated ? (
          <AuthLayout>
            <Component {...routeProps} />
          </AuthLayout>
        ) : (
          <Redirect to={`/seller/`} />
        )
      }
    />
  );
}
