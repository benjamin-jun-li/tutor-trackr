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
            // if (student || tutor || siteAdmin || tutorAdmin) {
            //     return {
            //         status: 1
            //     }
            // }else
            //     return {
            //         status: 0
            //     }
            return "hello world"
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

        // get course by id
        course: async (_parent: any, args: any, context: Context) => {
            return context.prisma.course.findUnique({
                where: {
                    id: args.id,
                },
                include: {
                    students: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
                    tutors: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    }
                }
            });
        },

        //get course list
        courses: async (_parent: any, args: any, context: Context) => {
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

        //get Application
        getApplication: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorApplication.findMany();
        }

    },

    // Todo Before we change the data in database we must check the data before

    Mutation: {
        // reset password
        resetPassword: async (_parent: any, args: any, context: Context) => {
            context.prisma.student.update({
                where: {
                    email: args.email,
                },
                data: {
                    password: args.password,
                },
            });
            context.prisma.tutor.update({
                where: {
                    email: args.email,
                },
                data: {
                    password: args.password,
                },
            });
            context.prisma.siteAdmin.update({
                where: {
                    email: args.email,
                },
                data: {
                    password: args.password,
                },
            });
            context.prisma.tutorAdmin.update({
                where: {
                    email: args.email,
                },
                data: {
                    password: args.password,
                },
            });
        },

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
                    username: args.username,
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
                    username: args.username,
                    phone: args.phone,
                    address: args.address,
                    timeZone: args.timeZone,
                    professionalBio: args.biography,
                    experienceSummary: args.experienceSummary,
                    courseCanTeach: args.courseCanTeach,
                },
            });
        },


        addCourse: async (_parent: any, args: any, context: Context) => {
            return context.prisma.course.create({
                data: {
                    name: args.name,
                    description: args.description,
                    tags: args.tags,
                    thumbnail: args.thumbnail,
                    price: args.price,

                },
            });
        },

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
        },

        deleteStudent: async (_parent: any, args: any, context: Context) => {
            try {
                const student = await context.prisma.student.findUnique({
                    where: {
                        email: args.email,
                    }
                });

                if (student) {
                    await context.prisma.studentProfile.delete({
                        where: {
                            studentId: student.id
                        }
                    });

                    // 然后删除学生
                    return await context.prisma.student.delete({
                        where: {
                            email: args.email,
                        }
                    });
                } else {
                    throw new Error("Student not found");
                }
            } catch (error: any) {
                throw new Error(`Failed to delete student: ${error.message}`);
            }

        },

        // Todo Need to use update
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
                    description: args.description,
                },
            });
        },
        
        // Student enrol course
        registerCourseForStudent: async (_parent: any, args: any, context: Context) => {
            // Ensure the student and course exist
            const student = await context.prisma.student.findUnique({
              where: { id: args.studentId },
            });
            const course = await context.prisma.course.findUnique({
              where: { id: args.courseId },
            });
          
            if (!student || !course) {
              throw new Error("Student or Course not found");
            }
          
            // Register the course for the student by updating the relation
            return context.prisma.student.update({
              where: { id: args.studentId },
              data: {
                courses: {
                  connect: { id: args.courseId },
                },
              },
            });
        },
        
        // Tutor enrol course
        registerCourseForTutor: async (_parent: any, args: any, context: Context) => {
            // Ensure the tutor and course exist
            const tutor = await context.prisma.tutor.findUnique({
              where: { id: args.tutorId },
            });
            const course = await context.prisma.course.findUnique({
              where: { id: args.courseId },
            });
          
            if (!tutor || !course) {
              throw new Error("Tutor or Course not found");
            }
          
            // Register the course for the tutor by updating the relation
            return context.prisma.tutor.update({
              where: { id: args.tutorId },
              data: {
                courses: {
                  connect: { id: args.courseId },
                },
              },
            });
        },

        // Student pays for the course
        payTheCourse: async (_parent: any, args: any, context: Context) => {
            // Ensure the student and course exist
            const student = await context.prisma.studentProfile.findUnique({
                where: { studentId: args.studentId },
            });
            const course = await context.prisma.course.findUnique({
                where: { id: args.courseId },
            });

            if (!student) {
                throw new Error("Student not found with ID: " + args.studentId);
            }
            if (!course) {
                throw new Error("Course not found with ID: " + args.courseId);
            }
            if (!course.price) {
                throw new Error("Course price unavailable: " + args.course.price);
            }  

            // Ensure student's account balance is enough
            if (student.accountBalance < course.price) {
                throw new Error("Insufficient balance");
            }

            // Deduct the student's account balance
            const balance = student.accountBalance;
            const price = course.price;
            const newBalance = balance - price;
            await context.prisma.studentProfile.update({
                where: { studentId: args.studentId },
                data: {
                    accountBalance: newBalance
                }
            });  

            // Register the course for the student by updating the relation
            return context.prisma.course.update({
                where: { id: args.courseId },
                data: {
                    students: {
                        connect: { id: args.studentId },
                    },
                },
            });
        }

        // // update password
        // updatePassword: async (_parent: any, args: any, context: Context) => {
        //
        // },
    }
}


