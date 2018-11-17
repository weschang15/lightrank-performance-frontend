import React, { Component } from "react";
import { StackedForm, StandardInput } from "Elements";
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
    }
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
    const { firstName, lastName, email, password } = this.state.form;

    const { data } = await onSubmit({
      variables: { firstName, lastName, email, password },
      refetchQueries: () => ["Me"]
    });

    const {
      createUser: { ok, user, errors }
    } = data;

    console.log(errors);

    if (ok) {
      await onSuccess({
        isAuth: true,
        userId: user.id
      });
    }
  };

  createFields = () => {
    return Object.entries(this.fields).map(([name, config]) => {
      return (
        <div key={name}>
          <StandardInput
            name={name}
            type={config.type}
            placeholder={config.label}
            autoComplete={config.autocomplete ? config.autocomplete : "false"}
            value={this.state.form[name]}
            onChange={this.handleChange}
          />
        </div>
      );
    });
  };

  render() {
    const { handleSubmit, createFields } = this;
    return (
      <StackedForm onSubmit={handleSubmit}>
        <h4>Register</h4>
        {createFields()}
        <button>Submit</button>
      </StackedForm>
    );
  }
}
