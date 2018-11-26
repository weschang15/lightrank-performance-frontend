import { gql } from "apollo-boost";

export default gql`
  mutation DeleteProject($id: Int!) {
    deleteProject(id: $id) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
