import styled from "styled-components";

const StandardInput = styled.input`
  margin: 0.5em 5px;
  padding: 12px 1em;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  color: #141414;
`;

export default StandardInput;
