import { gql } from "apollo-boost";

export default gql`
  subscription ProjectAdded($userId: ID!) {
    project: projectAdded(userId: $userId) {
      id
      name
      uuid
      averages {
        name
        value
      }
    }
  }
`;
