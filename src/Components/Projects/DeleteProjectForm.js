import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { DangerButton, StackedForm, StandardInput } from "Elements";
import { primaryTheme } from "Utilities";

class DeleteProjectForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    onSuccess: () => null
  };

  state = {
    form: {
      name: ""
    },
    invalid: true,
    validName: this.props.name.replace(/\s/g, "").toUpperCase() || ""
  };

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const val = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      prevState => ({
        form: {
          ...prevState.form,
          [name]: val
        }
      }),
      () => {
        const { validName } = this.state;

        if (validName === this.state.form.name) {
          this.setState({ invalid: false });
        } else {
          this.setState({ invalid: true });
        }
      }
    );
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { onSubmit, onSuccess, projectId } = this.props;

    const { data } = await onSubmit({
      variables: { id: projectId },
      refetchQueries: () => ["GetProjects"]
    });

    const {
      deleteProject: { ok, errors }
    } = data;

    console.log(errors);

    if (ok) {
      await onSuccess();
    }
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const {
      form: { name },
      invalid
    } = this.state;
    return (
      <ThemeProvider theme={primaryTheme}>
        <StackedForm onSubmit={handleSubmit}>
          <div>
            <Label>Project Name</Label>
            <Input
              name="name"
              type="text"
              value={name}
              placeholder="EXAMPLEPROJECT"
              onChange={handleChange}
            />
          </div>
          <DangerButton disabled={invalid}>Create Project</DangerButton>
        </StackedForm>
      </ThemeProvider>
    );
  }
}

const Input = styled(StandardInput)`
  margin-left: 0;
  margin-right: 0;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: ${({ theme }) => theme.weights.bold};
`;

export default DeleteProjectForm;
