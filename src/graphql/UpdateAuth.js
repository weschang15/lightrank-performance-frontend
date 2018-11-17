import { gql } from "apollo-boost";

export default gql`
  mutation UpdateAuth($isAuth: Boolean!, $userId: ID!) {
    updateAuth(isAuth: $isAuth, userId: $userId) @client {
      isAuth
      user
    }
  }
`;
