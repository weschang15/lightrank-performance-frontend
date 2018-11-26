import styled from "styled-components";
import Button from "./Button";

const PrimaryButton = styled(Button)`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.button.primary.default.bg};
  color: ${({ theme }) => theme.button.primary.default.color};
  border: 1px solid ${({ theme }) => theme.button.primary.default.bg};
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    border: 1px solid ${({ theme }) => theme.button.primary.hover.bg};
    background-color: ${({ theme }) => theme.button.primary.hover.bg};
    color: ${({ theme }) => theme.button.primary.hover.color};
  }
`;

export default PrimaryButton;
