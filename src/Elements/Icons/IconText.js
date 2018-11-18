import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconText = ({ text, color, ...rest }) => (
  <Wrapper color={color}>
    <Icon {...rest} />
    <span>{text}</span>
  </Wrapper>
);

IconText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

IconText.defaultProps = {
  color: "#272838"
};

const Wrapper = styled.span`
  color: ${props => props.color};
  line-height: 1;
  span,
  svg {
    display: inline-block;
    vertical-align: middle;
  }

  svg {
    fill: ${props => props.color};
    margin-right: 0.75em;
  }
`;

export default IconText;
