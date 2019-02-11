import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { PrimaryButton, Checkbox, StackedForm, StandardInput } from "Elements";
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
      name: "",
      baseUrl: "",
      enableCrawl: true
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

    await onSubmit({
      variables: {
        input: this.state.form
      }
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { base, name, enableCrawl } = this.state.form;
    return (
      <ThemeProvider theme={primaryTheme}>
        <Form onSubmit={handleSubmit}>
          <StandardInput
            name="name"
            type="text"
            value={name}
            placeholder="Project name"
            onChange={handleChange}
          />
          <StandardInput
            name="baseUrl"
            type="url"
            value={base}
            placeholder="Base url"
            onChange={handleChange}
          />
          <Checkbox
            name="enableCrawl"
            value={enableCrawl}
            htmlFor="enableCrawl"
            id="enableCrawl"
            label="Crawl sub pages"
            onChange={handleChange}
            checked={enableCrawl}
          />
          <PrimaryButton>Create Project</PrimaryButton>
        </Form>
      </ThemeProvider>
    );
  }
}

const Form = styled(StackedForm)`
  max-width: 480px;
  width: 100%;
`;

export default NewProjectForm;
