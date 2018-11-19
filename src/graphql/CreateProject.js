import { gql } from "apollo-boost";

export default gql`
  mutation CreateProject($name: String!) {
    createProject(name: $name) {
      ok
      errors {
        path
        message
      }
      project {
        name
      }
    }
  }
`;
