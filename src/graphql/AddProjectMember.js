import { gql } from "apollo-boost";

export default gql`
  mutation AddProjectMember($input: ProjectMember!) {
    addProjectMember(input: $input) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
