import React from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";
import { IconText, List, ListItem, Logo } from "Elements";

const SidebarItems = ({ match }) => {
  return (
    <>
      <Logo />
      <Menus>
        <List>
          <ListItem size="20px">
            <NavLink exact to="/dashboard">
              <IconText
                name="dashboard"
                text="Dashboard"
                size="1em"
                color="#FBF5F3"
              />
            </NavLink>
          </ListItem>
          <ListItem size="20px">
            <NavLink to={`${match.url}/projects`}>
              <IconText
                name="folder"
                text="Projects"
                size="1em"
                color="#FBF5F3"
              />
            </NavLink>
          </ListItem>
          <ListItem size="20px">
            <NavLink to={`${match.url}/reports`}>
              <IconText
                name="chart"
                text="Reports"
                size="1em"
                color="#FBF5F3"
              />
            </NavLink>
          </ListItem>
          <ListItem size="20px">
            <NavLink exact to={`${match.url}/settings`}>
              <IconText name="cog" text="Settings" size="1em" color="#FBF5F3" />
            </NavLink>
          </ListItem>
        </List>
        <List>
          <ListItem size="20px">
            <NavLink to="/users/logout">
              <IconText
                name="power"
                text="Log out"
                size="1em"
                color="#FBF5F3"
              />
            </NavLink>
          </ListItem>
        </List>
      </Menus>
    </>
  );
};

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1em;
  height: calc(100% - (2em + 72px));
`;

export default withRouter(SidebarItems);
