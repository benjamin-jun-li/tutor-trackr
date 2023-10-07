import { gql } from "@apollo/client";

export const ADD_Student = gql`
  mutation AddStudent(
    $name: String
    $email: String
    $password: String
  ) {
    addStudent(
      name: $name
      email: $email
      password: $password
    ) {
      id
      name
      email
      password
    }
  }
`;

export const ADD_Tutor = gql`
  mutation AddTutor(
    $name: String
    $email: String
    $password: String
  ) {
    addTutor(
      name: $name
      email: $email
      password: $password
    ) {
      id
      name
      email
      password
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

