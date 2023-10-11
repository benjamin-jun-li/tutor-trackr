import {gql} from "@apollo/client";

// The logic should be that the profile is an attribute of the user,
// so we should be able to update the profile by updating the user.

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
         profile{
          username
          email
      }
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
         profile{
          username
          email
      }
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
  ) {
    updateStudentProfile(
      email: $email
      thumbnail: $thumbnail
      username: $username
      phone: $phone
      address: $address
      timeZone: $timeZone
      biography: $biography
    ) {
      thumbnail
      email
      username
      phone
      address
      timeZone
      biography
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
    $biography:String
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
      professionalBio: $biography
      experienceSummary: $String
      courseCanTeach: $String
    ) {
      thumbnail
      email
      username
      phone
      address
      timeZone
      experienceSummary
      courseCanTeach
    }
  }
`;


export const ADD_COURSE = gql`
  mutation AddCourse(
    $name: String!
    $description: String
    $comments: [String!]
    $thumbnail: String
    $studentIds: [String!]
    $tutorIds: [String!]
  ) {
    addCourse(
      name: $name
      description: $description
      comments: $comments
      thumbnail: $thumbnail
      studentIds: $studentIds
      tutorIds: $tutorIds
    ) {
      id
      name
      description
      comments
      thumbnail
      students {
        id
        name
      }
      studentId
      tutors {
        id
        name
      }
      tutorId
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation DeleteCourse($name: String!) {
    deleteCourse(id: $id) {
      id
      name
    }
  }
`;

export const DELETE_Student = gql`
  mutation DeleteStudent($email: String!) {
    deleteStudent(email: $email) {
     email
   }
  }
`;

export const ADD_Application = gql`
  mutation AddApplication(
    $name: String
    $email: String
    $courseName: String
    $date: String
  ) {
    addApplication(
      name: $name
      email: $email
      courseName: $courseName
      date: $date
    ) {
      id
      name
      email
      courseName
      date
    }
  }
`;


export const ADD_Interview = gql`
  mutation AddInterview(
    $name: String
    $email: String
    $courseName: String
    $date: String
  ) {
    addInterview(
      name: $name
      email: $email
      courseName: $courseName
      date: $date
    ) {
      id
      name
      email
      courseName
      date
    }
  }
`;
