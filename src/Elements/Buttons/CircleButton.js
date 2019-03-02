import styled from "styled-components";
import { primaryTheme } from "../../Utilities";

const CircleButton = styled.button`
  background-color: ${primaryTheme.colors.white};
  border-radius: 50%;
  border: 1px solid ${primaryTheme.colors.lightest};
  cursor: pointer;
  height: 32px;
  position: relative;
  width: 32px;
  z-index: 9;
  svg {
    vertical-align: middle;
  }
`;

export default CircleButton;
