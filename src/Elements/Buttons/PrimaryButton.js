import styled from "styled-components";
import Button from "./Button";

const PrimaryButton = styled(Button)`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.button.primary.default.bg};
  border: 1px solid ${({ theme }) => theme.button.primary.default.border};
  color: ${({ theme }) => theme.button.primary.default.color};
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    border: 1px solid ${({ theme }) => theme.button.primary.hover.border};
    background-color: ${({ theme }) => theme.button.primary.hover.bg};
    color: ${({ theme }) => theme.button.primary.hover.color};
  }
`;

export default PrimaryButton;
