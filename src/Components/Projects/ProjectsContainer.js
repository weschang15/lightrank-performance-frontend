import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import ProjectList from "./ProjectList";

class ProjectsContainer extends Component {
  subscribe = (fn, user) => {
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
  };
  render() {
    const { subscribe } = this;
    return (
      <Query query={GET_AUTH}>
        {({ data: { auth }, loading: gettingUser }) => (
          <Query query={GET_PROJECTS}>
            {({ data, loading, subscribeToMore }) => {
              if (gettingUser || loading) return null;
              const { user } = auth;
              return (
                <ProjectList
                  data={data}
                  isLoading={loading}
                  subscribeToMore={() => subscribe(subscribeToMore, user)}
                />
              );
            }}
          </Query>
        )}
      </Query>
    );
  }
}

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
