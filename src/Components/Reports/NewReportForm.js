import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { Button, StackedForm, StandardInput } from "Elements";
import { primaryTheme } from "Utilities";

class NewReportForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func
  };

  static defaultProps = {
    onSuccess: () => null
  };

  state = {
    form: {
      url: ""
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
    const {
      onSubmit,
      onSuccess,
      match: {
        params: { id }
      }
    } = this.props;
    const { url } = this.state.form;

    const { data } = await onSubmit({
      variables: { url, projectId: parseInt(id) }
    });

    const {
      createReport: { ok }
    } = data;

    if (ok) {
      await onSuccess();
    }
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { url } = this.state.form;
    return (
      <ThemeProvider theme={primaryTheme}>
        <StackedForm onSubmit={handleSubmit}>
          <StandardInput
            name="url"
            type="url"
            value={url}
            placeholder="https://example.com"
            onChange={handleChange}
          />
          <Button>Create Report</Button>
        </StackedForm>
      </ThemeProvider>
    );
  }
}

export default withRouter(NewReportForm);
