import {Context} from "@/pages/api/graphql";

export const resolvers = {
    Query: {

        // Find user by email
        findUserByEmail: async (_parent: any, args: any, context: Context) => {
            const student = await context.prisma.student.findUnique({
                where: {
                    email: args.email,
                },
            });
            const tutor = await context.prisma.tutor.findUnique({
                where: {
                    email: args.email,
                },
            });
            const siteAdmin = await context.prisma.siteAdmin.findUnique({
                where: {
                    email: args.email,
                },
            });
            const tutorAdmin = await context.prisma.tutorAdmin.findUnique({
                where: {
                    email: args.email,
                },
            });
            if (student || tutor || siteAdmin || tutorAdmin) {
                return {
                    status: 1
                }
            }else
                return {
                    status: 0
                }
            },



        //auth student by email
        student: async (_parent: any, args: any, context: Context) => {
            return context.prisma.student.findUnique({
                where: {
                    email: args.email,
                },
            });
        },

        //auth tutor by email
        tutor: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutor.findUnique({
                where: {
                    email: args.email,
                },
            });
        },

        //auth siteAdmin by email
        siteAdmin: async (_parent: any, args: any, context: Context) => {
            return context.prisma.siteAdmin.findUnique({
                where: {
                    email: args.email,
                },
            });
        },

        //auth siteAdmin by email
        tutorAdmin: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorAdmin.findUnique({
                where: {
                    email: args.email,
                },
            });
        },

        //get course list
        course: async (_parent: any, args: any, context: Context) => {
            return context.prisma.course.findMany();
        },

        //get student list
        getStudentList: async (_parent: any, args: any, context: Context) => {
            return context.prisma.student.findMany();
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

        //get interview
        getInterview: async (_parent: any, args: any, context: Context) => {
            return context.prisma.interview.findMany();
        },

        //get interview
        getApplication: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorApplication.findMany();
        }

    },

    // Todo Before we change the data in database we must check the data before

    Mutation: {
        // add user
        addStudent: async (_parent: any, args: any, context: Context) => {
            return context.prisma.student.create({
                data: {
                    name: args.name,
                    email: args.email,
                    password: args.password,
                    profile: {
                        create: {
                            username: args.name,
                            email: args.email
                        }
                    },
                },
            });
        },

        // add tutor
        addTutor: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutor.create({
                data: {
                    name: args.name,
                    email: args.email,
                    password: args.password,
                    profile: {
                        create: {
                            username: args.name,
                            email: args.email
                        }
                    },
                },
            });
        },

        // update student profile
        updateStudentProfile: async (_parent: any, args: any, context: Context) => {
            return context.prisma.studentProfile.update({
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
                },
            });
        },

        // update tutor profile
        updateTutorProfile: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorProfile.update({
                where: {
                    email: args.email,
                },
                data: {
                    thumbnail: args.thumbnail,
                    username: args.unsername,
                    phone: args.phone,
                    address: args.address,
                    timeZone: args.timeZone,
                    professionalBio: args.biography,
                    experienceSummary: args.experienceSummary,
                    courseCanTeach: args.courseCanTeach,
                },
            });
        },

        // add course
        addCourse: async (_parent: any, args: any, context: Context) => {
            return context.prisma.course.create({
                data: {
                    name: args.name,
                },
            });
        },

        // delete course
        deleteCourse: async (_parent: any, args: any, context: Context) => {
            try {
                return context.prisma.course.delete({
                    where: {
                        id: args.id,
                    }
                });
            } catch (error: any) {
                throw new Error(`Failed to delete course: ${error.message}`);
            }
        },    // delete student
        deleteStudent: async (_parent: any, args: any, context: Context) => {
            try {
                return context.prisma.student.delete({
                    where: {
                        email: args.email,
                    }
                });
            } catch (error: any) {
                throw new Error(`Failed to delete student: ${error.message}`);
            }
        },
        addInterview: async (_parent: any, args: any, context: Context) => {
            return context.prisma.interview.create({
                data: {
                    name: args.name,
                    email: args.email,
                    courseName: args.courseName,
                    date: args.date,
                },
            });
        },
        // add application
        addApplication: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorApplication.create({
                data: {
                    name: args.name,
                    email: args.email,
                    courseName: args.courseName,
                    date: args.date,
                },
            });
        },
    }
}

