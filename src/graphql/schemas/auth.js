import { gql } from "apollo-boost";

export default gql`
  type Auth {
    isAuth: Boolean!
    user: Int!
  }

  type Mutation {
    updateAuth(isAuth: Boolean!, userId: ID!): Auth!
  }
`;
