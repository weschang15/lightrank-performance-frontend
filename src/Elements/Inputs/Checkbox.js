import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Checkbox extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool
  };

  static defaultProps = {
    checked: false
  };

  state = {
    isChecked: this.props.checked
  };

  handleChange = e => {
    const { props, state } = this;

    this.setState(
      { isChecked: !state.isChecked },
      props.onChange({
        target: {
          ...props,
          checked: e.target.checked
        },
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e.nativeEvent
      })
    );
  };

  render() {
    const { label, htmlFor, ...rest } = this.props;
    const { isChecked } = this.state;
    const { handleChange } = this;

    return (
      <Container>
        <Text>{label}</Text>
        <Input {...rest} onChange={handleChange} checked={isChecked} />
        <Label htmlFor={htmlFor} />
      </Container>
    );
  }
}

const Input = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + label {
    background-color: ${({ theme }) => theme.colors.green};
    &:after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }
  }
`;

const Label = styled.label`
  background-color: ${({ theme }) => theme.colors.lightest};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.lighter};
  height: 30px;
  width: 60px;
  display: inline-flex;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: background-color 250ms ease;

  &:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 20px;
    transition: width 300ms ease;
  }

  &:active:after {
    width: 50px;
  }
`;

const Container = styled.div`
  display: inline-flex;
  margin: 0.5em 10px;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};
  display: block;
  margin-bottom: 0.5em;
`;

export default Checkbox;
