import { gql } from "apollo-boost";

export default gql`
  mutation CreateProject($input: ProjectInput!) {
    createProject(input: $input) {
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
