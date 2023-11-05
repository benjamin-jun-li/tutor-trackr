import { gql } from "@apollo/client";

export const Find_User = gql`
    query finduser($id: String!) {
        finduser(id: $id) {
            status
            message
        }
    }
`

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

export const GET_COURSE = gql`
    query Course($id: String!) {
        course(id: $id) {
          name
          description
          comments
          thumbnail
          students {
            name
            email
            id
          }
          tutors {
            id
            name
            email
          }
            tags
        }
    }
`

export  const Get_TutorAvailability = gql`
    query TutorAvailability(
        $tutorId: String!,
        $courseId:String!
    ) {getTutorAvailability(tutorId:$tutorId,
    courseId: $courseId){
        startTime
        endTime
    }}
`

export const GET_TUTORS_BY_COURSE = gql`
query Course($id: String!) {
    course(id: $id) {
        name
        tutors {
            id
            name
            email
        }
    }
}
`

export const GET_COURSES = gql`
  query Course {
    courses {
      id
      name
      description
      comments
      thumbnail
      students {
          id,
          name,
          email
        }
      tutors {
        id,
        name,
        email
      }
        tags
    }
  }
`;

export const GET_StudentList = gql`
  query Student {
    getStudentList {
        id
        email
        name
        courses {
          id
          name
        }
    }
  }
`;

export const GET_TutorList = gql`
    query Tutor {
        getTutorList {
            id
            email
            name
            courses {
                id
                name
            }
        }
    }
`;

export const GET_STUDENT_PROFILE = gql`
  query StudentProfile($id: String!) {
    getStudentProfile(id: $id) {
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
  query TutorProfile($id: String!) {
    getTutorProfile(id: $id) {
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
      professionalBio
    }
  }
`;

export const GET_APPLICATION = gql`
  query TutorApplication {
    getApplication {
        id
        name
        email
        courseName
        description
        status
        interview{
            id
            name
            email
            courseName
            date
        }
    }
  }
`;

export const GET_APPLICATION_BY_ID = gql`
query TutorApplication($id: String!) {
    getSingleApplication(id: $id) {
        id
        name
        email
        courseName
        status
        interview {
            id
            name
            email
            courseName
            date
        }
        description
    }
  }
`

export const GET_INTERVIEW = gql`
  query Interview {
    getInterview {
        id
        name
        email
        courseName
        date
        application{
            id
            name
            email
            courseName
            description
        }
        applicationId
    }
  }
`;

export const GET_APPOINTMENT = gql`
  query Appointment {
    getAppointments {
        id
        tutorName
        tutorEmail
        studentName
        studentEmail
        startTime
        endTime
        courseName
        status
    }
  }
`;

export const FILTER_COURSES = gql`
  query FilterCourses($tags: [String!]) {
    filterCourses(tags: $tags) {
      id
      name
      description
      tags
      thumbnail
    }
  }
`;

export const GET_USERTYPE = gql`
  query GetUserType($email: String!) {
    getUserType(email: $email) {
        userType
    }
  }
`;

export const GET_SUCCESSFUL_RESERVATION = gql`
  query GetSuccessfulReservation($id: String!) {
    getSuccessfulReservation(id: $id) {
      courseName
    }
  }
`;