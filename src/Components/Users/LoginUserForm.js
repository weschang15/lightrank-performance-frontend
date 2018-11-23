import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { StackedForm, StandardInput } from "Elements";
import PropTypes from "prop-types";

export default class LoginUserForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func
  };

  static defaultProps = {
    onSuccess: () => null
  };

  state = {
    form: {
      email: "",
      password: ""
    },
    redirect: false
  };

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const val = target.type === "checkbox" ? target.checked : target.value;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: val
      }
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { onSubmit, onSuccess } = this.props;
    const { email, password } = this.state.form;

    const { data } = await onSubmit({
      variables: { email, password },
      refetchQueries: () => ["Me"]
    });

    const {
      loginUser: { ok, user }
    } = data;

    if (ok) {
      await onSuccess({
        isAuth: true,
        userId: user.id
      });

      this.setState({ redirect: true });
    }
  };

  render() {
    const { handleSubmit } = this;
    const {
      form: { email, password },
      redirect
    } = this.state;

    if (redirect) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <StackedForm onSubmit={handleSubmit}>
        <h4>Login</h4>
        <StandardInput
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          autoComplete="username"
          onChange={this.handleChange}
        />
        <StandardInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          autoComplete="current-password"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </StackedForm>
    );
  }
}
