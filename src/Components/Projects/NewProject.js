import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { SectionContainer } from "Elements";
import NewProjectForm from "./NewProjectForm";
import { CREATE_PROJECT } from "../../graphql";

const NewProject = () => {
  return (
    <Mutation mutation={CREATE_PROJECT}>
      {createProject => {
        return (
          <Container>
            <Header>Start a Project</Header>
            <Subtext>
              Adding a new project will allow you and your project members to
              organize performance/seo/best practice reports.
            </Subtext>
            <NewProjectForm onSubmit={createProject} />
          </Container>
        );
      }}
    </Mutation>
  );
};

const Header = styled.h2`
  text-transform: uppercase;
  color: #272838;
  letter-spacing: 0.015em;
  font-weight: 900;
  margin-bottom: 0;
`;

const Subtext = styled.p`
  color: #494950;
  margin: 0 0 2em;
`;

const Container = styled(SectionContainer)`
  margin-top: 0;
`;

export default NewProject;
