import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  ${({ theme, withShadow }) => withShadow && theme.shadows.primary}
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 0.025em;
  margin: 0.5em 0;
  padding: 0.5em 1.25em;
  text-transform: uppercase;
  transition: ${({ theme }) =>
    `${theme.transitions.speed.fast} background-color ${
      theme.transitions.easing.default
    }, ${theme.transitions.speed.fast} border-color ${
      theme.transitions.easing.default
    }`};
  &:disabled {
    border-color: ${({ theme }) => theme.buttons.disabled.bg};
    background-color: ${({ theme }) => theme.buttons.disabled.bg};
    color: ${({ theme }) => theme.buttons.disabled.color};
  }
`;

Button.defaultProps = {
  withShadow: true
};

export default Button;
