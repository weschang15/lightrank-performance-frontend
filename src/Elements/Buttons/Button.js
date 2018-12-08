import styled from "styled-components";

const Button = styled.button`
  font-size: 16px;
  padding: 0 1.25em;
  letter-spacing: 0.025em;
  font-weight: 600;
  height: 44px;
  cursor: pointer;
  margin: 0.5em 0;
  &:disabled {
    border-color: ${({ theme }) => theme.button.disabled.bg};
    background-color: ${({ theme }) => theme.button.disabled.bg};
    color: ${({ theme }) => theme.button.disabled.color};
  }
`;

export default Button;
