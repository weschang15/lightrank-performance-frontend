import { gql } from "apollo-boost";

export default gql`
  query GetReportScores($input: ReportsInput!) {
    reports(input: $input) {
      rows {
        scores {
          name
          value
        }
        uuid
      }
    }
  }
`;
