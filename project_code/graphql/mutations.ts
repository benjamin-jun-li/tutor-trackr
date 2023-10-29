import {gql} from "@apollo/client";


export const Update_Password = gql`
mutation UpdatePassword(
  $email: String!
    $password: String!
){
  resetPassword(
    email: $email
    password: $password)
}
`

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
      experienceSummary: $experienceSummary
      courseCanTeach: $courseCanTeach
    ) {
      thumbnail
      email
      username
      phone
      address
      timeZone
      experienceSummary
      courseCanTeach
      professionalBio
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
    $price: Int
      $tags: [String!]
  ) {
    addCourse(
      name: $name
      description: $description
      comments: $comments
      thumbnail: $thumbnail
      studentId: $studentIds
      tutorId: $tutorIds
      price: $price
        tags: $tags
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
      price
        tags
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation DeleteCourse($id: ID!) {
    deleteCourse(id: $id) {
      id
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
    $description: String
  ) {
    addApplication(
      name: $name
      email: $email
      courseName: $courseName
      description: $description
    ) {
      id
      name
      email
      courseName
      description
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

export const REGISTER_COURSE_FOR_STUDENT = gql`
  mutation RegisterCourseForStudent($studentId: ID!, $courseId: ID!) {
    registerCourseForStudent(studentId: $studentId, courseId: $courseId) {
      id
      name
      courses {
        id
        name
      }
    }
  }
`;

export const REGISTER_COURSE_FOR_TUTOR = gql`
  mutation RegisterCourseForTutor($tutorId: ID!, $courseId: ID!) {
    registerCourseForTutor(tutorId: $tutorId, courseId: $courseId) {
      id
      name
      courses {
        id
        name
      }
    }
  }
`;

export const PAY_THE_COURSE = gql`
  mutation PayTheCourse($studentId: ID!, $courseId: ID!) {
    payTheCourse(studentId: $studentId, courseId: $courseId) {
      id
      name
      students {
        id
      }
      price
    }
  }
`;

