import React from "react";
import styled from "styled-components";
import Icon from "../Icons/Icon";
import LogoText from "./LogoText";

const Logo = () => {
  return (
    <LogoContainer>
      <Icon name="logo" size="40px" />
      <LogoText>LightRank</LogoText>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  margin-bottom: 2em;
  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.75em;
  }
`;

export default Logo;
