import React from "react";
import { PageContainer } from "Elements";
import { ProjectList, NewProject } from "Components";

const Projects = () => {
  return (
    <PageContainer>
      <h1>Your projects</h1>
      <NewProject />
      <ProjectList />
    </PageContainer>
  );
};

export default Projects;
