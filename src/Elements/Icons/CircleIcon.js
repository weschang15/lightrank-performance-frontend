import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { primaryTheme } from "Utilities";
import Icon from "./Icon";

const CircleIcon = ({
  bgColor,
  borderColor,
  iconName,
  iconColor,
  iconSize
}) => (
  <CircleIconWrapper bgColor={bgColor} borderColor={borderColor}>
    <Icon name={iconName} color={iconColor} size={iconSize} />
  </CircleIconWrapper>
);

CircleIcon.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  iconName: PropTypes.string.isRequired
};

CircleIcon.defaultProps = {
  borderColor: primaryTheme.colors.lightest
};

const CircleIconWrapper = styled.span`
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  border: 1px solid ${({ borderColor }) => borderColor};
  display: flex;
  height: 3em;
  justify-content: center;
  margin: 0 0 0 -6px;
  position: relative;
  text-align: center;
  width: 3em;
`;

export default CircleIcon;
