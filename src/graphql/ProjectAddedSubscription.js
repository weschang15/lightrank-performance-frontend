import { gql } from "apollo-boost";

export default gql`
  subscription ProjectAdded($userId: ID!) {
    project: projectAdded(userId: $userId) {
      createdAt
      id
      name
      users {
        initials
        email
      }
      uuid
    }
  }
`;
