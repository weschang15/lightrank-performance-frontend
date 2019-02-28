import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { AdminHeader, Dashboard, Sidebar, Projects, Project } from "Components";

class Admin extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <AdminWrapper>
        <Sidebar />
        <AdminHeader />
        <Route path={`${path}`} component={Dashboard} exact />
        <Route path={`${path}/projects`} component={Projects} exact />
        <Route path={`${path}/projects/:id`} component={Project} />
      </AdminWrapper>
    );
  }
}

const AdminWrapper = styled.div`
  padding-left: 235px;
`;

export default Admin;
