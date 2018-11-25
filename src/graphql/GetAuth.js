import { gql } from "apollo-boost";

export default gql`
  query GetAuth {
    auth @client {
      user
    }
  }
`;
