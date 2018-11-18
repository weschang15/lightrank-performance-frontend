import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { LOGOUT_USER as mutation } from "../../graphql";

class Logout extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired
  };

  static defaultProps = {
    to: "/users/join"
  };

  componentDidMount = async () => {
    const { client } = this.props;
    await client.mutate({ mutation });
    client.resetStore();
  };

  render() {
    const { to } = this.props;
    return <Redirect to={to} />;
  }
}

export default withApollo(Logout);
