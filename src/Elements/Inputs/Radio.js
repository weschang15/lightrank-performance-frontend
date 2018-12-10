import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs({ type: "radio" })`
  display: none;
  + label {
    background-color: ${({ theme }) => theme.colors.lightest};
    border: 1px solid ${({ theme }) => theme.colors.lighter};
    color: ${({ theme }) => theme.colors.darker};
  }
  &:checked + label {
    background-color: #adc4fc;
    border-color: #88a9fb;
    color: #001f71;
  }
`;

const Label = styled.label`
  font-size: 14px;
  padding: 5px 10px;
  display: inline-flex;
  border-radius: 999px;
  margin: 0.5em 5px;
  cursor: pointer;
`;

const Container = styled.div`
  display: inline-flex;
`;

const RadioInput = ({ label, htmlFor, ...rest }) => (
  <Container>
    <Input {...rest} />
    <Label htmlFor={htmlFor}>{label}</Label>
  </Container>
);

export default RadioInput;
