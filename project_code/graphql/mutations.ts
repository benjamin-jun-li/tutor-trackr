import {gql} from "@apollo/client";


export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($email: String!, $password: String!) {
    resetPassword(email: $email, password: $password) {
      status
      message
    }
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
    $id: ID!
    $email: String!
    $thumbnail: String
    $username: String
    $phone: String
    $address: String
    $timeZone: String
    $biography: String
  ) {
    updateStudentProfile(
      id: $id
      email: $email
      thumbnail: $thumbnail
      username: $username
      phone: $phone
      address: $address
      timeZone: $timeZone
      biography: $biography
    ) {
      id
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
    $professionalBio:String
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
      professionalBio: $professionalBio
      experienceSummary: $experienceSummary
      courseCanTeach: $courseCanTeach
    ) {
        email
        thumbnail
        username
        phone
        address
        timeZone
        professionalBio
        experienceSummary
        courseCanTeach
    }
  }
`;

export const Approval_Application = gql`
    mutation ApprovalApplication($id: ID!) {
      approveApplication(id: $id) {
        status
      }
    }
`
export const Reject_Application = gql`
  mutation RejectApplication($id: ID!) {
    rejectApplication(id: $id) {
      status
    }
  }
`

export const Approval_Course_Application = gql`
    mutation ApprovalApplication($id: ID!) {
        approveCourseApplication(id: $id) {
            status
        }
    }
`
export const Reject_Course_Application = gql`
    mutation RejectApplication($id: ID!) {
        rejectCourseApplication(id: $id) {
            status
        }
    }
`

export const Interview_Feedback = gql`
    mutation interviewFeedback($id: ID!,$description: String!, $status: String!){
    interviewFeedback(id: $id, description: $description, status: $status) {
    description
    status
    }
    }
`



export const ADD_COURSE = gql`
    mutation AddCourse(
        $name: String!
        $description: String
        $comments: [String!]
        $thumbnail: String
        $studentIds: [String!]
        $tutorId: [String!]
        $price: Int
        $tags: [String!]
        $status: String
    ) {
        addCourse(
            name: $name
            description: $description
            comments: $comments
            thumbnail: $thumbnail
            studentId: $studentIds
            tutorId: $tutorId
            price: $price
            tags: $tags
            status: $status
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
            status
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
  mutation DeleteStudent($id: ID!) {
    deleteStudent(id: $id) {
     id
   }
  }
`;

export const DELETE_Tutor = gql`
    mutation DeleteTutor($id: ID!) {
        deleteTutor(id: $id) {
          id
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
     status
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
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation AddAppointment(
    $courseName: String,
    $tutorName: String,
    $tutorEmail: String,
    $studentName: String,
    $studentEmail: String,
    $startTime: String,
    $endTime: String,
    $appointmentDate: String
  ) {
    addAppointment(
      courseName: $courseName,
      tutorName: $tutorName,
      tutorEmail: $tutorEmail,
      studentName: $studentName,
      studentEmail: $studentEmail,
      startTime: $startTime
      endTime: $endTime
      appointmentDate: $appointmentDate
    ) {
      courseName
      tutorName
      tutorEmail
      studentName
      studentEmail
      startTime
      endTime
      appointmentDate
    }
  }
`;

export const ADD_IDENTITY = gql`
  mutation AddIdentity(
    $email: String!,
    $userType: UserType!
  ) {
    addIdentity(
      email: $email,
      userType: $userType
    ) {
      email
      userType
    }
  }
`;
