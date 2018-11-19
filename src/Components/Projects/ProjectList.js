import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

class ProjectList extends Component {
  render() {
    return (
      <Query query={GET_PROJECTS}>
        {({ data: { getProjects }, loading }) => {
          if (loading) {
            return <h3>Loading...</h3>;
          }

          return getProjects.map(project => (
            <h3 key={project.id}>{project.name}</h3>
          ));
        }}
      </Query>
    );
  }
}

const GET_PROJECTS = gql`
  query GetProjects {
    getProjects {
      id
      name
    }
  }
`;

export default ProjectList;
