export const typeDefs = `#graphql 

union UserByEmail = Student | Tutor | SiteAdmin | TutorAdmin

  type Student {
    id:    ID!
    name: String
    email: String 
    password: String
    courses: [Course]
    profile: StudentProfile
  }

  type Tutor {
    id:    ID!
    name: String
    email: String 
    password: String
    courses: [Course]
    profile: TutorProfile
  }

  type SiteAdmin {
    id:    ID!
    name: String
    email: String 
    password: String
  }


  type TutorAdmin {
    id:    ID!
    name: String
    email: String 
    password: String
  }
  

  type Course {
    id:   ID!
    name: String
    description: String
    comments: [String]
    thumbnail: String
    students: [Student]  
    studentId: [String]
    tutors: [Tutor]
    tutorId: [String]
    price: Int
      tags: [String]
  }

  type StudentProfile {
    id: ID!
    thumbnail: String
    email: String
    username: String
    phone: String
    address: String
    timeZone: String
    biography: String
    accountBalance: Int
  }

  type TutorProfile {
    id: ID!
    thumbnail: String
    email: String
    username: String
    phone: String
    address: String
    timeZone: String
    accountBalance: Int
    professionalBio:String
    experienceSummary: String
    courseCanTeach: String
  }

  type TutorApplication {
    id: ID!
    name: String
    email: String
    courseName: String
    interview: Interview
    description: String
  }

  type Interview {
    id: ID!
    name: String
    email: String
    courseName: String
    date: String
      application: TutorApplication
      applicationId: String
  }
 
  type Query {
    findUserByEmail(email: String): UserByEmail
	student(email: String): Student
    tutor(email: String): Tutor
    siteAdmin(email: String): SiteAdmin
    tutorAdmin(email: String): TutorAdmin
    course(id: String!): Course
    courses: [Course]
    getStudentList:[Student]
    getStudentProfile(email: String!): StudentProfile
    getTutorProfile(email: String!): TutorProfile
    getApplication: [TutorApplication]
    getInterview: [Interview]
  }

  type Mutation {
    addStudent (name:String, email:String,password:String) : Student
    addTutor (name:String, email:String,password:String) : Tutor
    updateStudentProfile(
      email: String!, thumbnail: String, username: String, phone: String,
      address: String, timeZone: String, biography: String
    ) : StudentProfile
    updateTutorProfile(
      email: String!, thumbnail: String, username: String, phone: String,
      address: String, timeZone: String,  experienceSummary: String, 
      courseCanTeach: String,professionalBio: String
    ) : TutorProfile
    addCourse(name: String!, description: String, comments: [String], 
      thumbnail: String, studentId: [String], tutorId: [String], price: Int, tags: [String]
    ) : Course
    deleteCourse(id: ID!): Course
    deleteStudent(email: String!): Student
     addApplication(name: String, email: String, courseName: String,description:String) : TutorApplication
    addInterview(name: String, email: String, courseName: String, date: String
    ) : Interview
    registerCourseForStudent(studentId: ID!, courseId: ID!): Student
    registerCourseForTutor(tutorId: ID!, courseId: ID!): Tutor
    payTheCourse(studentId: ID!, courseId: ID!): Course
    resetPassword(email: String!, password: String!): UserByEmail
  }
`;
