import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { PrimaryButton, StackedForm, StandardInput } from "Elements";
import { primaryTheme } from "Utilities";
import PropTypes from "prop-types";

export default class AddProjectMemberForm extends Component {
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
      projectId: this.props.projectId
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
    const { onSubmit } = this.props;

    const { data } = await onSubmit({
      variables: { input: this.state.form }
    });

    console.log(data);
  };

  render() {
    const { handleSubmit } = this;
    const {
      form: { email }
    } = this.state;

    return (
      <ThemeProvider theme={primaryTheme}>
        <StackedForm onSubmit={handleSubmit}>
          <StandardInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            autoComplete="username"
            onChange={this.handleChange}
          />
          <PrimaryButton>Invite User</PrimaryButton>
        </StackedForm>
      </ThemeProvider>
    );
  }
}
