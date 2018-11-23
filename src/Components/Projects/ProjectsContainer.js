import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import styled from "styled-components";
import { SectionContainer } from "Elements";
import ProjectList from "./ProjectList";

class ProjectsContainer extends Component {
  subscribe = (fn, user) => () =>
    fn({
      document: PROJECTS_SUBSCRIPTION,
      variables: {
        userId: user
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newProject = subscriptionData.data.project;
        const updatedQuery = {
          ...prev,
          projects: [...prev.projects, newProject]
        };

        return updatedQuery;
      }
    });
  render() {
    const { subscribe } = this;
    return (
      <Query query={GET_AUTH}>
        {({ data: { auth }, loading: gettingUser }) => (
          <Query query={GET_PROJECTS}>
            {({ data, loading, subscribeToMore }) => {
              const isLoading = gettingUser || loading;
              if (isLoading) return null;
              const { user } = auth;
              return (
                <SectionContainer>
                  <Header>Your Projects</Header>
                  <ProjectList
                    data={data}
                    subscribeToMore={subscribe(subscribeToMore, user)}
                  />
                </SectionContainer>
              );
            }}
          </Query>
        )}
      </Query>
    );
  }
}

const Header = styled.h3`
  text-transform: uppercase;
  color: #272838;
  letter-spacing: 0.005em;
  font-weight: 900;
`;

const PROJECTS_SUBSCRIPTION = gql`
  subscription ProjectsAdded($userId: Int!) {
    project: projectAdded(userId: $userId) {
      id
      name
    }
  }
`;

const GET_PROJECTS = gql`
  query GetProjects {
    projects: getProjects {
      id
      name
    }
  }
`;

const GET_AUTH = gql`
  query GetAuth {
    auth @client {
      user
    }
  }
`;

export default ProjectsContainer;
