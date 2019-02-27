import { gql } from "apollo-boost";

export default gql`
  query GetProjects {
    projects: getProjects {
      id
      name
      uuid
      averages {
        name
        value
      }
      users {
        firstName
        lastName
        email
      }
    }
  }
`;
