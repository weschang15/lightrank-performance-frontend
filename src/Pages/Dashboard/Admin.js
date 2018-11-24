import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Dashboard, Sidebar, Projects, Project } from "Components";

class Admin extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <AdminWrapper>
        <Sidebar />
        <Route path={`${path}`} component={Dashboard} exact />
        <Route path={`${path}/projects`} component={Projects} exact />
        <Route path={`${path}/projects/:id`} component={Project} />
      </AdminWrapper>
    );
  }
}

const AdminWrapper = styled.div`
  padding-left: 250px;
`;

export default Admin;
