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
    description: String
    comments: [String]
    thumbnail: String
  }

 
  type Query {
	  user(email: String): User 
    course: [Course]
  }

  type Mutation {
    addUser (name:String, email:String,password:String,identity:String) : User
  }
`;
