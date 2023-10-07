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

export const GET_STUDENT_PROFILE = gql`
  query StudentProfile($email: String!) {
    getStudentProfile(email: $email) {
      id
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

export const GET_TUTOR_PROFILE = gql`
  query TutorProfile($email: String!) {
    getTutorProfile(email: $email) {
      id
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