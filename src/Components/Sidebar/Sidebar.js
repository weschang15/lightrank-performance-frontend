import React from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItems />
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  background-color: #272838;
  left: 0;
  position: fixed;
  top: 0;
  height: 100%;

  li a {
    padding: 0 1.5em;
    display: block;
  }

  li:hover {
    a:not(.active) {
      opacity: 1;
    }
  }

  a:not(.active) {
    opacity: 0.25;
  }

  .active {
    position: relative
    &:before {
      width: 4px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: #f8b202;
      content: "";
    }
  }
`;

export default Sidebar;
