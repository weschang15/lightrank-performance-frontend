import React from "react";
import { PageContainer } from "Elements";
import ProjectList from "./ProjectList";
import NewProject from "./NewProject";

const Projects = () => {
  return (
    <PageContainer>
      <h1>Your projects</h1>
      <NewProject />
      <h1>All Projects</h1>
      <ProjectList />
    </PageContainer>
  );
};

export default Projects;
