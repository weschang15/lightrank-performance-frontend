import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import {
  PrimaryButton,
  StackedForm,
  StandardInput,
  RadioInput
} from "Elements";
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
      url: "",
      repeat: 0
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

    const { url, repeat } = this.state.form;
    const { data } = await onSubmit({
      variables: { url: url.trim(), repeat: parseInt(repeat), projectId: id }
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
          <div>
            <div>
              <StandardInput
                name="url"
                type="url"
                value={url}
                placeholder="https://example.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <RadioInput
                id="repeat-0"
                htmlFor="repeat-0"
                name="repeat"
                type="radio"
                value={0}
                label="No repeat"
                onChange={handleChange}
              />
              <RadioInput
                id="repeat-15"
                htmlFor="repeat-15"
                name="repeat"
                type="radio"
                value={15}
                label="15 minutes"
                onChange={handleChange}
              />
              <RadioInput
                id="repeat-30"
                htmlFor="repeat-30"
                name="repeat"
                type="radio"
                value={30}
                label="30 minutes"
                onChange={handleChange}
              />
              <RadioInput
                id="repeat-60"
                htmlFor="repeat-60"
                name="repeat"
                type="radio"
                value={60}
                label="60 minutes"
                onChange={handleChange}
              />
            </div>
          </div>
          <PrimaryButton>Create Report</PrimaryButton>
        </StackedForm>
      </ThemeProvider>
    );
  }
}

export default withRouter(NewReportForm);
