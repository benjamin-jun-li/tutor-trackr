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

export const GET_COURSES = gql`
  query Course {
    course {
      id
      name
      discription
      comments
      thumbnail
    }
  }
`;
