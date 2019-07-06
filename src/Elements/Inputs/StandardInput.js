import styled from "styled-components";

const StandardInput = styled.input`
  border-radius: ${({ theme }) => theme.curvature.primary};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  ${({ theme, withShadow }) => withShadow && theme.shadows.primary}
  color: #141414;
  display: block;
  font-size: 1rem;
  margin: 0.5em 0;
  padding: 0.5em 1em;
  transition: ${({ theme }) =>
    `${theme.transitions.speed.fast} border-color ${
      theme.transitions.easing.default
    }`};
  &:focus {
    border-color: #2491eb;
    box-shadow: inset 0 0 0 1px #2491eb, 0 3px 6px rgba(0, 0, 0, 0.16);
    outline: 0;
  }
`;

StandardInput.defaultProps = {
  withShadow: false
};

export default StandardInput;
