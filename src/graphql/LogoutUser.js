import { gql } from "apollo-boost";
export default gql`
  mutation LogoutUser {
    logoutUser {
      ok
      errors {
        path
        message
      }
    }
  }
`;
