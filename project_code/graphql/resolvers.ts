import { Context } from "@/pages/api/graphql";

export const resolvers = {
  Query: {
    //auth student by email
    student: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.student.findUnique({
        where: {
          email: args.email,
        },
      });
    },

    //auth tutor by email
    tutor: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.tutor.findUnique({
        where: {
          email: args.email,
        },
      });
    },

    //auth siteAdmin by email
    siteAdmin: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.siteAdmin.findUnique({
        where: {
          email: args.email,
        },
      });
    },

    //auth siteAdmin by email
    tutorAdmin: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.tutorAdmin.findUnique({
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
    addStudent: async (_parent: any, args: any, context: Context) => {
      return context.prisma.student.create({
        data: {
          name: args.name,
          email: args.email,
          password: args.password,
        },
      });
    },

    // add user
    addTutor: async (_parent: any, args: any, context: Context) => {
      return context.prisma.tutor.create({
        data: {
          name: args.name,
          email: args.email,
          password: args.password,
        },
      });
    },

    // update student profile
    updateStudentProfile: async (_parent: any, args: any, context: Context) => {
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
