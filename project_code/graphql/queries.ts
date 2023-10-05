import { gql } from "@apollo/client";

export const GET_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      id
      name
      email
      password
      identity
    }
  }
`;

export const GET_COURSE = gql`
  query Course {
    course {
      id
      name
      description
      comments
      thumbnail
    }
  }
`;
