import { gql } from "@apollo/client";

export const AUTHENTICATED_USER = gql`
  query Query {
    authUserProfile {
      id
      username
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  query Query($username: String!, $password: String!) {
    authenticateUser(username: $username, password: $password) {
      user {
        email
        username
      }
      token
    }
  }
`;

export const GET_ALL_POST = gql`
  query post($page: Int, $limit: Int) {
    getAllPosts(page: $page, limit: $limit) {
      posts {
        id
        title
        content
        author {
          id
          username
        }
        createdAt
        updatedAt
      }
      paginator {
        hasPrevPage
        hasNextPage
        prev
        next
        slNo
        totalPosts
        totalPages
        perPage
        currentPage
      }
    }
  }
`;
