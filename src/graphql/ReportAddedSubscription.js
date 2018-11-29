import { gql } from "apollo-boost";

export default gql`
  subscription ReportAdded($projectId: ID!) {
    report: reportAdded(projectId: $projectId) {
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
