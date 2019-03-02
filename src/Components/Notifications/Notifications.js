import React from "react";
import styled from "styled-components";
import { primaryTheme } from "Utilities";

const Notifications = () => {
  return <NotificationsWrapper>Some notifications</NotificationsWrapper>;
};

const NotificationsWrapper = styled.aside`
  position: absolute;
  top: 100%;
  right: 0;
  border: 1px solid ${primaryTheme.colors.lighter};
  padding: 1em;
  background-color: ${primaryTheme.colors.pureWhite};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  width: 18em;
  margin: 1em 0;
`;

export default Notifications;
