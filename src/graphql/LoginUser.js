import { gql } from "apollo-boost";

export default gql`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      ok
      user {
        id
      }
      errors {
        path
        message
      }
    }
  }
`;
