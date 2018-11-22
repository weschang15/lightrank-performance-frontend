import styled from "styled-components";

const Button = styled.button`
  font-size: 16px;
  padding: 0 1.25em;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.button.default.bg};
  color: ${({ theme }) => theme.button.default.color};
  border: 1px solid ${({ theme }) => theme.border};
  letter-spacing: 0.025em;
  font-weight: 600;
  height: 44px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.button.hover.bg};
    color: ${({ theme }) => theme.button.hover.color};
  }
`;

export default Button;
