import React, { Component } from "react";
import styled from "styled-components";
import { Sidebar } from "Components";

export default class Admin extends Component {
  render() {
    return (
      <AdminWrapper>
        <Sidebar />
        <h1>Admin</h1>
      </AdminWrapper>
    );
  }
}

const AdminWrapper = styled.div`
  padding-left: 250px;
`;
