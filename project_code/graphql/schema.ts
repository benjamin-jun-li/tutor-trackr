export const typeDefs = `#graphql 
 
  type Student {
    id:    ID!
    name: String
    email: String 
    password: String
    courses: [Course]
  }

  type Tutor {
    id:    ID!
    name: String
    email: String 
    password: String
    courses: [Course]
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
    tutors: [Tutor]
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
    accountBalance: String
  }

  type TutorProfile {
    id: ID!
    thumbnail: String
    email: String
    username: String
    phone: String
    address: String
    timeZone: String
    accountBalance: String
    experienceSummary: String
    courseCanTeach: String
  }
 
  type Query {
	  student(email: String): Student
    tutor(email: String): Tutor
    siteAdmin(email: String): SiteAdmin
    tutorAdmin(email: String): TutorAdmin

    course: [Course]
    getStudentProfile(email: String!): StudentProfile
    getTutorProfile(email: String!): TutorProfile
  }

  type Mutation {
    addStudent (name:String, email:String,password:String) : Student
    addTutor (name:String, email:String,password:String) : Tutor
    updateStudentProfile(
      email: String!, thumbnail: String, username: String, phone: String,
      address: String, timeZone: String, biography: String, accountBalance: String
    ) : StudentProfile
    updateTutorProfile(
      email: String!, thumbnail: String, username: String, phone: String,
      address: String, timeZone: String, accountBalance: String, experienceSummary: String, 
      courseCanTeach: String
    ) : TutorProfile
  }
`;
