import {Context} from "@/pages/api/graphql";

export const resolvers = {
    Query: {
        finduser: async (_parent: any, args: any, context: Context) => {

            const student = await context.prisma.student.findUnique({
                where: { id: args.id },
            });

            const tutor = await context.prisma.tutor.findUnique({
                where: { id: args.id },
            });

            const siteAdmin = await context.prisma.siteAdmin.findUnique({
                where: { id: args.id },
            });


            const tutorAdmin = await context.prisma.tutorAdmin.findUnique({
                where: { id: args.id },
            });

            if (student||tutor||siteAdmin||tutorAdmin) {
                return {
                    status: 1,
                    message: "find user successfully",
                };
            } else {
                return {
                    status: 0,
                    message: "Do not find user",
                };
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

        // get course by id
        course: async (_parent: any, args: any, context: Context) => {
            return context.prisma.course.findUnique({
                where: {
                    id: args.id,
                },
                include: {
                    students: true,
                    tutors: true
                }
            });
        },

        //get course list
        courses: async (_parent: any, args: any, context: Context) => {
            return context.prisma.course.findMany(
                {
                    include:{
                        students: true,
                        tutors: true
                    }
                }
            );
        },

        //get student list
        getStudentList: async (_parent: any, args: any, context: Context) => {
            return context.prisma.student.findMany({
                include: {
                    courses: true
                }
            });
        },

        //get tutor list
        getTutorList: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutor.findMany({
                include: {
                    courses: true
                }
            });
        },


        //get student profile
        getStudentProfile: async (_parent: any, args: any, context: Context) => {
            return context.prisma.studentProfile.findUnique({
                where: {
                    studentId: args.id,
                },
            });
        },

        //get tutor profile
        getTutorProfile: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorProfile.findUnique({
                where: {
                    tutorId: args.id,
                },
            });
        },

        //get interview
        getInterview: async (_parent: any, args: any, context: Context) => {
            return context.prisma.interview.findMany();
        },

        //get Application
        getApplication: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorApplication.findMany({
                include: {
                    interview: true
            }})
        },

        getSingleApplication: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorApplication.findUnique({
                where: {
                    id: args.id,
                }})
        },

        getTutorAvailability: async (_parent: any, args: any, context: Context) => {
            return  context.prisma.tutorAvailability.findMany({
                where: {
                    tutorId: args.tutorId,
                    courseId: args.courseId,
                },
            });
        },


        //get consultation
        getAppointments: async (_parent: any, args: any, context: Context) => {
            return context.prisma.appointment.findMany();
        },

        //filter
        filterCourses: async (_parent: any, args: any, context: Context) => {

            const filteredCourses = await context.prisma.course.findMany({
                where: {
                  tags: {
                    hasSome: args.tags,
                  },
                },
              });
          
            return filteredCourses;
        },

        //get user type
        getUserType: async (_parent: any, args: any, context: Context) => {
            const identity = await context.prisma.identity.findUnique({
                where: { email: args.email, },
            });
            if (!identity) {
                throw new Error('No user found with this email!');
            }
            return identity;
        },

        getSuccessfulReservation: async (_parent: any, args: any, context: Context) => {
            const reservation = await context.prisma.appointment.findMany({
                where: {
                    status: "Approve",
                  },
            });

            return reservation;
        },

        //UOOI-23
        getStudentInfo: async (_parent: any, args: any, context: Context) => {
            const tutorId = args.tutorId;
            const courses = await context.prisma.course.findMany({
                where: { 
                    tutorId: {
                        has: tutorId
                    }
                },

                include: {
                    students: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            profile: true
                        }
                    },
                }
            });

            return courses;
        }
    },


    Mutation: {
        resetPassword: async (_parent: any, args: any, context: Context) => {
            let userFound = false;

            const student = await context.prisma.student.findUnique({
                where: { email: args.email },
            });
            if (student) {
                await context.prisma.student.update({
                    where: { email: args.email },
                    data: { password: args.password },
                });
                userFound = true;
            }

            const tutor = await context.prisma.tutor.findUnique({
                where: { email: args.email },
            });
            if (tutor) {
                await context.prisma.tutor.update({
                    where: { email: args.email },
                    data: { password: args.password },
                });
                userFound = true;
            }

            const siteAdmin = await context.prisma.siteAdmin.findUnique({
                where: { email: args.email },
            });
            if (siteAdmin) {
                await context.prisma.siteAdmin.update({
                    where: { email: args.email },
                    data: { password: args.password },
                });
                userFound = true;
            }

            const tutorAdmin = await context.prisma.tutorAdmin.findUnique({
                where: { email: args.email },
            });
            if (tutorAdmin) {
                await context.prisma.tutorAdmin.update({
                    where: { email: args.email },
                    data: { password: args.password },
                });
                userFound = true;
            }

            if (userFound) {
                return {
                    status: 1,
                    message: "Reset password successfully",
                };
            } else {
                return {
                    status: 0,
                    message: "Reset password failed",
                };
            }
        },

        // add user
        addStudent: async (_parent: any, args: any, context: Context) => {
            const student = await context.prisma.student.create({
                data: {
                    name: args.name,
                    email: args.email,
                    password: args.password,
                    profile: {
                        create: {
                            username: args.name,
                            email: args.email,
                            accountBalance:1000000
                        }
                    },
                },
                select: {
                    id: true
                }
            });
            return student;
        },


        // add tutor
        addTutor: async (_parent: any, args: any, context: Context) => {
            const tutor = await context.prisma.tutor.create({
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
                select: {
                    id: true
                }
            });
            return tutor;
        },

        // update student profile
        updateStudentProfile: async (_parent: any, args: any, context: Context) => {
            const { email, thumbnail, username, phone, address, timeZone, biography, id } = args;
    
            const existingProfile = await context.prisma.studentProfile.findUnique({
                where: { id: args.id, },
            });


            if (!existingProfile) {
                throw new Error('Student profile not found');
            }
            
            if (email && existingProfile.email !== email) {
                throw new Error('Email address does not match the existing profile');
            }
            
            return context.prisma.studentProfile.update({
                where: {
                    id: args.id,
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
                    professionalBio: args.professionalBio,
                    experienceSummary: args.experienceSummary,
                    courseCanTeach: args.courseCanTeach,
                },
            });
        },


        addCourse: async (_parent: any, args: any, context: Context) => {

            const status = args.status ==="Approved" ? "Approved" : "Pending";

            return context.prisma.course.create({
                data: {
                    name: args.name,
                    description: args.description,
                    tags: args.tags,
                    thumbnail: args.thumbnail,
                    price: args.price,
                    status: status,
                    tutorId: args.tutorId,
                    price: args.price,
                },
            });
        },

        deleteCourse: async (_parent: any, args: any, context: Context) => {
            try {
                await context.prisma.registerCourse.deleteMany({
                    where: { courseId: args.id },
                });

                await context.prisma.tutorAvailability.deleteMany({
                    where: { courseId: args.id },
                });

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
                        id: args.id,
                    }
                });



                if (student) {
                    await context.prisma.studentProfile.delete({
                        where: {
                            studentId: student.id
                        }
                    });

                    return await context.prisma.student.delete({
                        where: {
                            id: args.id,
                        }
                    });
                } else {
                    throw new Error("Student not found");
                }
            } catch (error: any) {
                throw new Error(`Failed to delete student: ${error.message}`);
            }

        },

        deleteTutor: async (_parent: any, args: any, context: Context) => {
            try {
                const tutor = await context.prisma.tutor.findUnique({
                    where: {
                        id: args.id,
                    }
                });

                if (tutor) {
                    await context.prisma.tutorProfile.delete({
                        where: {
                            tutorId: args.id
                        }
                    });

                    await context.prisma.tutorAvailability.deleteMany({
                        where: { tutorId: args.id },
                    });

                    return await context.prisma.tutor.delete({
                        where: {
                            id: args.id,
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
                    appointmentDate: args.appointmentDate
                },
            });
        },

        approveApplication: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorApplication.update({
                where: {
                    id: args.id,
                },
                data: {
                    status: "Approved",
                },
            });
        },

        rejectApplication: async (_parent: any, args: any, context: Context) => {
            return context.prisma.tutorApplication.update({
                where: {
                    id: args.id,
                },
                data: {
                    status: "Rejected",
                },
            });
        },

        approveCourseApplication: async (_parent: any, args: any, context: Context) => {
            return context.prisma.course.update({
                where: {
                    id: args.id,
                },
                data: {
                    status: "Approved",
                },
            });
        },

        rejectCourseApplication: async (_parent: any, args: any, context: Context) => {
            return context.prisma.course.update({
                where: {
                    id: args.id,
                },
                data: {
                    status: "Rejected",
                },
            });
        },

        interviewFeedback: async (_parent: any, args: any, context: Context) => {
            return context.prisma.interview.update({
                where: {
                    id: args.id
                },
                data: {
                    description: args.description,
                    status: args.status,
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
            console.log(student);
            console.log(course);
            if (!student || !course) {
              throw new Error("Student or Course not found");
            }
          
            // Register the course for the student by updating the relation
            return context.prisma.registerCourse.create({
                data: {
                    student: {
                    connect: { id: args.studentId },
                    },
                    course: {
                    connect: { id: args.courseId },
                    },
                    date: new Date().toISOString(),
                    status: "Success",
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
        },

        // add appointment
        addAppointment: async (_parent: any, args: any, context: Context) => {
            return context.prisma.appointment.create({
                data: {
                    courseName: args.courseName,
                    tutorName: args.tutorName,
                    tutorEmail: args.tutorEmail,
                    studentName: args.studentName,
                    studentEmail: args.studentEmail,
                    date: new Date().toISOString(),
                    startTime: args.startTime,
                    endTime: args.endTime,
                    status: "Waiting for accepts",
                },
            });
        },

        //add identity
        addIdentity: async (_parent: any, args: any, context: Context) => {
            
            return context.prisma.identity.create({
                data: {
                    email: args.email,
                    userType: args.userType,
                },
            });
        },
    }
}


