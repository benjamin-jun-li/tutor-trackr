import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $name: String
    $email: String
    $password: String
    $identity: String
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
      identity: $identity
    ) {
      id
      name
      email
      password
      identity
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile(
    $email: String!
    $thumbnail: String
    $username: String
    $phone: String
    $address: String
    $timeZone: String
    $biography: String
    $accountBalance: String
  ) {
    updateStudentProfile(
      email: $email
      thumbnail: $thumbnail
      username: $username
      phone: $phone
      address: $address
      timeZone: $timeZone
      biography: $biography
      accountBalance: $accountBalance
    ) {
      thumbnail
      email
      username
      phone
      address
      timeZone
      biography
      accountBalance
    }
  }
`;

