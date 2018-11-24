import styled from "styled-components";

const Spinner = styled.div`
  display: inline-block;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #1abb9c;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1.2s linear infinite;
  vertical-align: middle;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
