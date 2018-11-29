import { gql } from "apollo-boost";

export default gql`
  subscription ReportUpdated($id: ID!, $projectId: ID!) {
    report: reportUpdated(id: $id, projectId: $projectId) {
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
