export const typeDefs = `#graphql 
    type User {
    id: ID!
    name: String
    email: String
    password: String
  }

  type Query {
	  user(email: String): User 
  }

  type Mutation {
    addUser (name:String, email:String,password:String) : User
  }
`;
