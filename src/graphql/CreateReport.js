import { gql } from "apollo-boost";

export default gql`
  mutation CreateReport($url: String!, $projectId: ID!) {
    createReport(url: $url, projectId: $projectId) {
      ok
      errors {
        path
        message
      }
      report {
        url
      }
    }
  }
`;
