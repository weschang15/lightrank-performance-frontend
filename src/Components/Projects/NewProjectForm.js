import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { PrimaryButton, StackedForm, StandardInput } from "Elements";
import { primaryTheme } from "Utilities";

class NewProjectForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func
  };

  static defaultProps = {
    onSuccess: () => null
  };

  state = {
    form: {
      name: ""
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
    const { name } = this.state.form;

    const { data } = await onSubmit({
      variables: { name }
    });

    const {
      createProject: { ok }
    } = data;

    if (ok) {
      await onSuccess();
    }
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { name } = this.state.form;
    return (
      <ThemeProvider theme={primaryTheme}>
        <StackedForm onSubmit={handleSubmit}>
          <StandardInput
            name="name"
            type="text"
            value={name}
            placeholder="Project name"
            onChange={handleChange}
          />
          <PrimaryButton>Create Project</PrimaryButton>
        </StackedForm>
      </ThemeProvider>
    );
  }
}

export default NewProjectForm;
