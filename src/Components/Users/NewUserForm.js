import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PrimaryButton, StackedForm, StandardInput } from "Elements";
import { primaryTheme } from "Utilities";
import PropTypes from "prop-types";

export default class NewUserForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func
  };

  static defaultProps = {
    onSuccess: () => null
  };

  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    redirect: false
  };

  fields = {
    firstName: {
      value: "",
      label: "First name",
      type: "text",
      required: true
    },
    lastName: {
      value: "",
      label: "Last name",
      type: "text",
      required: true
    },
    email: {
      value: "",
      label: "Email",
      type: "email",
      required: true,
      autocomplete: "username"
    },
    password: {
      value: "",
      label: "Password",
      type: "password",
      required: true,
      autocomplete: "new-password"
    }
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

    const { data } = await onSubmit({
      variables: { input: this.state.form },
      refetchQueries: () => ["Me"]
    });

    const {
      createUser: { ok, user }
    } = data;

    if (ok) {
      await onSuccess({
        isAuth: true,
        userId: user.id
      });

      this.setState({ redirect: true });
    }
  };

  createFields = () => {
    return Object.entries(this.fields).map(([name, config]) => {
      return (
        <StandardInput
          key={name}
          name={name}
          type={config.type}
          placeholder={config.label}
          autoComplete={config.autocomplete ? config.autocomplete : "false"}
          value={this.state.form[name]}
          onChange={this.handleChange}
        />
      );
    });
  };

  render() {
    const {
      handleSubmit,
      createFields,
      state: { redirect }
    } = this;
    if (redirect) return <Redirect to="/dashboard" />;

    return (
      <ThemeProvider theme={primaryTheme}>
        <StackedForm onSubmit={handleSubmit}>
          {createFields()}
          <PrimaryButton>Submit</PrimaryButton>
        </StackedForm>
      </ThemeProvider>
    );
  }
}
