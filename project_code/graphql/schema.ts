export const typeDefs = `#graphql 
 
  type Student {
    id    ID!
    name String
    email String 
    password String
    courses Course[]
  }

  type Tutor {
    id    ID!
    name String
    email String 
    password String
    courses Course[]
  }

  type SiteAdmin {
    id    ID!
    name String
    email String 
    password String
  }


  type TutorAdmin {
    id    ID!
    name String
    email String 
    password String
  }
  

  type Course {
    id:   ID!
    name: String
    discription: String
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
	  user(email: String): User 
    course: [Course]
    getStudentProfile(email: String!): StudentProfile
    getTutorProfile(email: String!): TutorProfile
  }

  type Mutation {
    addUser (name:String, email:String,password:String,identity:String) : User
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
