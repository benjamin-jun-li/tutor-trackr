import { gql } from "@apollo/client";

export const Auth_Student = gql`
  query Student($email: String!) {
    student(email: $email) {
      id
      name
      email
      password
    }
  }
`;

export const Auth_Tutor = gql`
  query Tutor($email: String!) {
    tutor(email: $email) {
      id
      name
      email
      password
    }
  }
`;

export const Auth_SiteAdmin = gql`
  query SiteAdmin($email: String!) {
    siteAdmin(email: $email) {
      id
      name
      email
      password
    }
  }
`;

export const Auth_TutorAdmin = gql`
  query TutorAdmin($email: String!) {
    tutorAdmin(email: $email) {
      id
      name
      email
      password
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

export const GET_PROFILE = gql`
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
