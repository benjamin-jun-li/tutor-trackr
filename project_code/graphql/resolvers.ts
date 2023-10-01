import { Context } from "@/pages/api/graphql";

export const resolvers = {
  Query: {
    //get user by email
    user: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.findUnique({
        where: {
          email: args.email,
        },
      });
    },
  },

  Mutation: {
    // add user
    addUser: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: args.password,
        },
      });
    },
  },
};