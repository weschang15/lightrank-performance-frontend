import { gql } from "apollo-boost";

export default gql`
  subscription ReportAdded($projectId: ID!) {
    report: reportAdded(projectId: $projectId) {
      id
      createdAt
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
