import { gql } from "apollo-boost";

export default gql`
  query GetProjects {
    projects: getProjects {
      id
      name
      averages {
        name
        value
      }
    }
  }
`;
