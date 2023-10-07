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

export const UPDATE_STUDENT_PROFILE = gql`
  mutation UpdateStudentProfile(
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

export const UPDATE_TUTOR_PROFILE = gql`
  mutation UpdateTutorProfile(
    $email: String!
    $thumbnail: String
    $username: String
    $phone: String
    $address: String
    $timeZone: String
    $accountBalance: String
    $experienceSummary: String
    $courseCanTeach: String
  ) {
    updateTutorProfile(
      email: $email
      thumbnail: $thumbnail
      username: $username
      phone: $phone
      address: $address
      timeZone: $timeZone
      accountBalance: $accountBalance
      experienceSummary: $String
      courseCanTeach: $String
    ) {
      thumbnail
      email
      username
      phone
      address
      timeZone
      accountBalance
      experienceSummary
      courseCanTeach
    }
  }
`;

