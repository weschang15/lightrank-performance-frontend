import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({
  component: Component,
  isAuth,
  isLoading,
  redirect: pathname,
  ...rest
}) => {
  if (isLoading) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname, state: { from: props.location } }} />
        )
      }
    />
  );
};

ProtectedRoute.defaultProps = {
  redirect: "/users/join"
};

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string
};

export default ProtectedRoute;
