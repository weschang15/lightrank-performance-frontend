import { gql } from "apollo-boost";

export default gql`
  subscription ReportAdded($projectId: Int!) {
    report: reportAdded(projectId: $projectId) {
      id
      url
    }
  }
`;
