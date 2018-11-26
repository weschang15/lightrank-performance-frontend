import { gql } from "apollo-boost";

export default gql`
  subscription ProjectAdded($userId: Int!) {
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
