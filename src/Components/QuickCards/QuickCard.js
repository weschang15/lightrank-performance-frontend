import styled from "styled-components";
import { primaryTheme } from "Utilities";

const QuickCard = styled.div`
  border: 1px solid ${primaryTheme.colors.lighter};
  cursor: pointer;
  flex: 0 1 20em;
  min-width: 275px;
  user-select: none;
  padding: 1em;
  margin: 1em;
  border-radius: ${primaryTheme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default QuickCard;
