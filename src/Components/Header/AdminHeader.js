import React from "react";
import styled from "styled-components";
import { Toggle } from "Utilities";
import { Icon } from "Elements";
import Notifications from "../Notifications/Notifications";

const AdminHeader = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Toggle>
              {({ on, toggle }) => (
                <>
                  {on && <Notifications on={on} toggle={toggle} />}
                  <IconWrapper onClick={toggle}>
                    <Icon name="notification" color="#d2d2d4" />
                  </IconWrapper>
                </>
              )}
            </Toggle>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  border-bottom: 1px solid #d2d2d4;
  padding: 1em;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    li {
      display: inline-block;
      position: relative;
    }
  }
`;

const IconWrapper = styled.button`
  display: block;
  cursor: pointer;
  border: 0;
  padding: 0;
`;

export default AdminHeader;
