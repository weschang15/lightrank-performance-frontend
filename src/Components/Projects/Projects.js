import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { PageContainer } from "Elements";
import ProjectsContainer from "./ProjectsContainer";
import NewProject from "./NewProject";

const Projects = () => {
  return (
    <Query query={GET_AUTH}>
      {({ data: { auth }, loading }) => {
        if (loading) return null;

        return (
          <PageContainer>
            <h1>Your projects</h1>
            <NewProject />
            <h1>All Projects</h1>
            <ProjectsContainer user={auth.user} />
          </PageContainer>
        );
      }}
    </Query>
  );
};

const GET_AUTH = gql`
  query GetAuth {
    auth @client {
      user
    }
  }
`;

export default Projects;
