import { gql } from "apollo-boost";

export default gql`
  query GetReports($projectId: Int!) {
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
