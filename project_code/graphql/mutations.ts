import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $name: String
    $email: String
    $password: String
    $identity: String
  ) {
    addUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
      identity
    }
  }
`;
