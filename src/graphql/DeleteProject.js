import { gql } from "apollo-boost";

export default gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
