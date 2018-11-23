import React from "react";
import { PageContainer } from "Elements";
import ProjectsContainer from "./ProjectsContainer";
import NewProject from "./NewProject";

const Projects = () => {
  return (
    <PageContainer>
      <NewProject />
      <ProjectsContainer />
    </PageContainer>
  );
};

export default Projects;
