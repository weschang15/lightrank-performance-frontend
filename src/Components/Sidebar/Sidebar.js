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
  padding: 1em 1.5em;
  left: 0;
  position: fixed;
  top: 0;
  height: 100%;
  width: 250px;
`;

export default Sidebar;
