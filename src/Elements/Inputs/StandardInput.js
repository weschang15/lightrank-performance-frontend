import styled from "styled-components";

const StandardInput = styled.input`
  margin: 0.5em 0;
  padding: 12px 1em;
  font-size: 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.border};
  color: #141414;
  width: auto;
`;

export default StandardInput;
