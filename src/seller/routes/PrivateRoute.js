import React, {useEffect} from "react";
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
  console.log("pathRedirect(match.path):", pathRedirect(match.path));
  console.log("props.isAuthenticated", props.isAuthenticated);
  console.log("props.isSeller",  props.isSeller);

  useEffect(() => {
    console.log("PrivateRoute render");
  })

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
