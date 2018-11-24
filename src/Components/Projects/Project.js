import React, { Component } from "react";
import { PageContainer } from "Elements";
import NewReport from "../Reports/NewReport";
import ReportsContainer from "../Reports/ReportsContainer";

class Project extends Component {
  render() {
    return (
      <PageContainer>
        <NewReport />
        <ReportsContainer />
      </PageContainer>
    );
  }
}

export default Project;
