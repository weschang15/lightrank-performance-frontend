import { gql } from "apollo-boost";

export default gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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
