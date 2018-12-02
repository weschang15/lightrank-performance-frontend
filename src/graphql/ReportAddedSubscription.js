import { gql } from "apollo-boost";

export default gql`
  subscription ReportAdded($projectId: ID!) {
    report: reportAdded(projectId: $projectId) {
      id
      completed
      scores {
        name
        value
      }
      url
      uuid
      updated_at
    }
  }
`;
