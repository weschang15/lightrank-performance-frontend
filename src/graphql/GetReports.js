import { gql } from "apollo-boost";

export default gql`
  query GetReports($input: ReportsInput!) {
    reports(input: $input) {
      rows {
        createdAt
        completed
        id
        baseUrl
        scores {
          name
          value
        }
        updatedAt
        uuid
      }
      pageInfo {
        hasNextPage
        total
        totalPages
      }
    }
  }
`;
