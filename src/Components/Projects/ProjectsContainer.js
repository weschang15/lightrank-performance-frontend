import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import ProjectList from "./ProjectList";

class ProjectsContainer extends Component {
  static propTypes = {
    user: PropTypes.number.isRequired
  };

  static defaultProps = {
    user: -1
  };

  render() {
    return (
      <Query query={GET_PROJECTS}>
        {({ data, loading, subscribeToMore }) => (
          <ProjectList
            data={data}
            isLoading={loading}
            subscribeToMore={() =>
              subscribeToMore({
                document: PROJECTS_SUBSCRIPTION,
                updateQuery: (prev, { subscriptionData }) => {
                  if (!subscriptionData.data) return prev;
                  const newProject = subscriptionData.data.project;
                  const updatedQuery = {
                    ...prev,
                    projects: [...prev.projects, newProject]
                  };

                  return updatedQuery;
                }
              })
            }
          />
        )}
      </Query>
    );
  }
}

const PROJECTS_SUBSCRIPTION = gql`
  subscription ProjectsAdded {
    project: projectAdded {
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

export default ProjectsContainer;
