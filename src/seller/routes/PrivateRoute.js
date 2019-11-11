import React from "react";
// 3rd packages
import { Route, Redirect, useRouteMatch } from "react-router-dom";
// layouts
import PrivateLayout from "../layouts/PrivateLayout";

export default function PrivateRoute({ component: Component, ...props }) {
  let match = useRouteMatch();

  const pathRedirect = rootPath => {
    if (props.isAuthenticated && !props.isSeller) {
      return `/`;
    } else {
      return `${rootPath}/login`;
    }
  };

  return (
    <Route
      {...props}
      render={routeProps =>
        props.isAuthenticated && props.isSeller ? (
          <PrivateLayout>
            <Component {...routeProps} />
          </PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: pathRedirect(match.path),
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
}
