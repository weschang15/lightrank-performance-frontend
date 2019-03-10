import { gql } from "apollo-boost";

export default gql`
  subscription ReportUpdated($id: ID!, $projectId: ID!) {
    report: reportUpdated(id: $id, projectId: $projectId) {
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
