import { gql } from "apollo-boost";

export default gql`
  mutation CreateReport($url: String!, $repeat: Int!, $projectId: ID!) {
    createReport(url: $url, repeat: $repeat, projectId: $projectId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
