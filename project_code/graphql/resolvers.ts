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

    //get course list
    course: async (_parent: any, args: any, context: Context) => {
      return context.prisma.course.findMany();
    },

    //get student profile
    getStudentProfile: async (_parent: any, args: any, context: Context) => {
      return context.prisma.studentProfile.findUnique({
        where: {
          email: args.email,
        },
      });
    },

    //get tutor profile
    getTutorProfile: async (_parent: any, args: any, context: Context) => {
      return context.prisma.tutorProfile.findUnique({
        where: {
          email: args.email,
        },
      });
    },

  },

  Mutation: {
    // add user
    addUser: async (_parent: any, args: any, context: Context) => {
      try {
        return await context.prisma.user.create({
          data: {
            name: args.name,
            email: args.email,
            password: args.password,
            identity: args.identity,
          },
        });
      } catch (error: any) {
        if (error.code === "P2002" && error.meta?.target?.includes("email")) {
          // Handle the unique constraint error for email
          console.error("Email already exists!");
          throw new Error("Email already exists!"); // This line is added to throw the error
        } else {
          console.error("Some other error occurred:", error);
          throw error; // This line will throw any other errors that might occur
        }
      }
    },

    // update student profile
    updateStudentProfile: async(_parent: any, args: any, context: Context) => {
      return await context.prisma.studentProfile.update({
        where: {
          email: args.email,
        },
        data: {
          thumbnail: args.thumbnail,
          username: args.unsername,
          phone: args.phone,
          address: args.address,
          timeZone: args.timeZone,
          biography: args.biography,
          accountBalance: args.accountBalance,
        },
      });
    },

    // update tutor profile
    updateTutorProfile: async(_parent: any, args: any, context: Context) => {
      return await context.prisma.tutorProfile.update({
        where: {
          email: args.email,
        },
        data: {
          thumbnail: args.thumbnail,
          username: args.unsername,
          phone: args.phone,
          address: args.address,
          timeZone: args.timeZone,
          accountBalance: args.accountBalance,
          experienceSummary: args.experienceSummary,
          courseCanTeach: args.courseCanTeach,
        },
      });
    },
  },
};
