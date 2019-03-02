import React, { Component } from "react";
import styled from "styled-components";
import { PageContainer } from "Elements";
import QuickCards from "../QuickCards/QuickCards";

export default class Dashboard extends Component {
  render() {
    return (
      <PageContainer>
        <Header>Dashboard</Header>
        <QuickCards />
      </PageContainer>
    );
  }
}

const Header = styled.h2`
  text-transform: uppercase;
  color: #272838;
  letter-spacing: 0.015em;
  font-weight: 900;
  margin-bottom: 0;
`;
