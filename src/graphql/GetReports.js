import { gql } from "apollo-boost";

export default gql`
  query GetReports($projectId: ID!) {
    reports: getReports(projectId: $projectId) {
      id
      completed
      scores {
        name
        value
      }
      baseUrl
      uuid
      updatedAt
    }
  }
`;
