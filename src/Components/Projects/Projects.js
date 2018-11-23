import React from "react";
import { PageContainer } from "Elements";
import ProjectsContainer from "./ProjectsContainer";
import NewProject from "./NewProject";

const Projects = () => {
  return (
    <PageContainer>
      <h1>Your projects</h1>
      <NewProject />
      <h1>All Projects</h1>
      <ProjectsContainer />
    </PageContainer>
  );
};

export default Projects;
