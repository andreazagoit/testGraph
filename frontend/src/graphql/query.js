import { gql } from "graphql-request";

export const GET_USERS = gql`
  {
    users {
      id
      name
    }
  }
`;

export const GET_POSTS = gql`
  {
    posts {
      id
      title
      body
      published
      author {
        id
        name
      }
      comments {
        id
        text
        author {
          id
          name
        }
      }
    }
  }
`;

export const GET_USER = gql`
  {
    query ($query: String) {
      users(query: $query) {
        id
        name
      }
    }
  }
`;
