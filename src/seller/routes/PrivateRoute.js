import React from "react";
// 3rd packages
import { Route, Redirect } from "react-router-dom";
// layouts
import PrivateLayout from "../layouts/PrivateLayout";

export default function PrivateRoute({ component: Component, ...props }) {
  // For test auth
  // const [isAuthenticated] = useState(true);

  return (
    <Route
      {...props}
      render={routeProps =>
        (props.isAuthenticated && props.isSeller) ? (
          <PrivateLayout>
            <Component {...routeProps} />
          </PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: `/login`,
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
}
