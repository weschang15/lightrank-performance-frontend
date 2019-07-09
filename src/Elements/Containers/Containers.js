import styled from "styled-components";
import PropTypes from "prop-types";

export const PageContainer = styled.main`
  padding: 1em;
`;

export const SectionContainer = styled.div`
  margin: 35px 0;
`;

export const Wrapper = styled.div`
  max-width: ${({ maxContainerWidth }) => `${maxContainerWidth}px`};
  ${({ centered }) => centered && `margin: 0 auto`};
`;

Wrapper.propTypes = {
  centered: PropTypes.bool,
  maxContainerWidth: PropTypes.number.isRequired
};

Wrapper.defaultProps = {
  maxContainerWidth: 1440
};
