import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Admin, Home, UserJoin } from "Pages";
import PropTypes from "prop-types";

class Routes extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  static defaultProps = {
    isAuth: false,
    isLoading: false
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Admin} />
        <Route path="/users/join" component={UserJoin} />
      </Switch>
    );
  }
}

export default Routes;
