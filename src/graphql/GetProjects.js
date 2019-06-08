import { gql } from "apollo-boost";

export default gql`
  query GetProjects($input: ProjectsInput!) {
    projects(input: $input) {
      rows {
        createdAt
        id
        name
        users {
          initials
          email
        }
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
