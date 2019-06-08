import React from "react";
import styled from "styled-components";
import { primaryTheme } from "../../Utilities";

const UserIconWrapper = styled.div`
  background-color: ${primaryTheme.colors.white};
  border-radius: 50%;
  border: 1px solid ${primaryTheme.colors.lightest};
  color: ${primaryTheme.colors.lighter};
  cursor: pointer;
  font-size: 12px;
  font-weight: ${primaryTheme.weights.bold}
  height: 32px
  line-height: 30px;
  margin: 0 0 0 -6px;
  position: relative;
  text-align: center;
  width: 32px;
  &:first-of-type {
    z-index: 8;
  }
  &:nth-of-type(2) {
    z-index: 7;
  }
  &:last-of-type {
    z-index: 6;
  }
`;

const UserIcon = ({ initials, email }) => {
  return (
    <UserIconWrapper title={email}>{initials.toUpperCase()}</UserIconWrapper>
  );
};

export default UserIcon;
