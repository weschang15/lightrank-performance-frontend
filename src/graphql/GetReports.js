import { gql } from "apollo-boost";

export default gql`
  query GetReports($projectId: ID!) {
    reports: getReports(projectId: $projectId) {
      id
      url
      uuid
      scores {
        name
        value
      }
      completed
    }
  }
`;
