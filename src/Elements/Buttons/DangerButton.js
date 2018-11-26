import styled from "styled-components";
import Button from "./Button";

const DangerButton = styled(Button)`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.button.danger.default.bg};
  color: ${({ theme }) => theme.button.danger.default.color};
  border: 1px solid ${({ theme }) => theme.button.danger.default.bg};
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    border: 1px solid ${({ theme }) => theme.button.danger.hover.bg};
    background-color: ${({ theme }) => theme.button.danger.hover.bg};
    color: ${({ theme }) => theme.button.danger.hover.color};
  }
`;

export default DangerButton;
