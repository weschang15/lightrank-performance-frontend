import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import {
  PrimaryButton,
  StackedForm,
  StandardInput,
  Radio,
  Checkbox
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
      baseUrl: "",
      repeatInterval: "0",
      categories: [
        "accessibility",
        "best-practices",
        "performance",
        "pwa",
        "seo"
      ]
    },
    fields: {
      accessibility: {
        checked: true,
        name: "accessibility",
        value: "accessibility",
        label: "Accessibility"
      },
      bp: {
        checked: true,
        name: "bp",
        value: "best-practices",
        label: "Best Practices"
      },
      performance: {
        checked: true,
        name: "performance",
        value: "performance",
        label: "Performance"
      },
      pwa: {
        checked: true,
        name: "pwa",
        value: "pwa",
        label: "PWA"
      },
      seo: {
        checked: true,
        name: "seo",
        value: "seo",
        label: "SEO"
      }
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

  handleSelectedCategories = e => {
    const target = e.target;
    const val = target.value;
    const isChecked = target.checked;

    if (isChecked) {
      this.setState(prevState => ({
        ...prevState,
        form: {
          ...prevState.form,
          categories: prevState.form.categories.concat([val])
        }
      }));
    } else {
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          categories: prevState.form.categories.filter(cat => cat !== val)
        }
      }));
    }
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

    const { baseUrl, repeatInterval, categories } = this.state.form;
    const input = {
      baseUrl,
      repeatInterval: +repeatInterval,
      projectId: id,
      categories
    };

    const { data } = await onSubmit({
      variables: { input }
    });

    const {
      createReport: { ok }
    } = data;

    if (ok) {
      await onSuccess();
    }
  };

  render() {
    const { handleSubmit, handleChange, handleSelectedCategories } = this;
    const { fields } = this.state;
    const { baseUrl } = this.state.form;

    const checkboxes = Object.keys(fields).map(field => (
      <Checkbox
        key={field}
        name={fields[field].name}
        value={fields[field].value}
        htmlFor={field}
        id={field}
        label={fields[field].label}
        onChange={handleSelectedCategories}
        checked={fields[field].checked}
      />
    ));

    return (
      <ThemeProvider theme={primaryTheme}>
        <Form onSubmit={handleSubmit}>
          <StandardInput
            name="baseUrl"
            type="url"
            value={baseUrl}
            placeholder="https://example.com"
            onChange={handleChange}
          />
          <div>{checkboxes}</div>
          <div>
            <Radio
              id="repeatInterval-0"
              htmlFor="repeatInterval-0"
              name="repeatInterval"
              type="radio"
              value={0}
              label="No repeat"
              onChange={handleChange}
            />
            <Radio
              id="repeatInterval-15"
              htmlFor="repeatInterval-15"
              name="repeatInterval"
              type="radio"
              value={15}
              label="15 minutes"
              onChange={handleChange}
            />
            <Radio
              id="repeatInterval-30"
              htmlFor="repeatInterval-30"
              name="repeatInterval"
              type="radio"
              value={30}
              label="30 minutes"
              onChange={handleChange}
            />
            <Radio
              id="repeatInterval-60"
              htmlFor="repeatInterval-60"
              name="repeatInterval"
              type="radio"
              value={60}
              label="60 minutes"
              onChange={handleChange}
            />
          </div>
          <PrimaryButton>Create Report</PrimaryButton>
        </Form>
      </ThemeProvider>
    );
  }
}

const Form = styled(StackedForm)`
  max-width: 480px;
  width: 100%;
`;

export default withRouter(NewReportForm);
