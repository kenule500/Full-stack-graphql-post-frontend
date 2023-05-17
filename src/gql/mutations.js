import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($input: UserInput) {
    registerUser(input: $input) {
      token
      user {
        id
        email
        firstName
        lastName
        createdAt
        updatedAt
      }
    }
  }
`;
