import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Dashboard, Sidebar } from "Components";
import Projects from "./Projects";

class Admin extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <AdminWrapper>
        <Sidebar />
        <Route path={`${path}`} component={Dashboard} exact />
        <Route path={`${path}/projects`} component={Projects} />
      </AdminWrapper>
    );
  }
}

const AdminWrapper = styled.div`
  padding-left: 250px;
`;

export default Admin;
