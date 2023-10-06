export const typeDefs = `#graphql 
  type User {
    id: ID!
    name: String
    email: String
    password: String
    identity: String
  }

  type Course {
    id:   ID!
    name: String
    discription: String
    comments: [String]
    thumbnail: String
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
 
  type Query {
	  user(email: String): User 
    course: [Course]
    getStudentProfile(email: String!): StudentProfile
  }

  type Mutation {
    addUser (name:String, email:String,password:String,identity:String) : User
    updateStudentProfile(
      email: String!, thumbnail: String, username: String, phone: String,
      address: String, timeZone: String, biography: String, accountBalance: String
    ) : StudentProfile
  }
`;
