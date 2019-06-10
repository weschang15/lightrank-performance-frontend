import React, { Component } from "react";
import { PageContainer } from "Elements";
import NewReport from "../Reports/NewReport";
import ReportsContainer from "../Reports/ReportsContainer";
import ProjectOverview from "./ProjectOverview";

class Project extends Component {
  render() {
    return (
      <PageContainer>
        <NewReport />
        <ProjectOverview />
        <ReportsContainer />
      </PageContainer>
    );
  }
}

export default Project;
