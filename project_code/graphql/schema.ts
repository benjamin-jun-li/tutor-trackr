export const typeDefs = `#graphql 

union UserByEmail = Student | Tutor | SiteAdmin | TutorAdmin

enum UserType {
    Student
    Tutor
    SiteAdmin
    TutorAdmin
}

type PasswordResetResponse {
    status: Boolean!
    message: String
}

type Student {
    id:    ID!
    name: String
    email: String
    password: String
    courses: [Course]
    profile: StudentProfile
}

type Tutor {
    id:    ID!
    name: String
    email: String
    password: String
    courses: [Course]
    profile: TutorProfile
}

type SiteAdmin {
    id:    ID!
    name: String
    email: String
    password: String
}


type TutorAdmin {
    id:    ID!
    name: String
    email: String
    password: String
}


type Course {
    id:   ID!
    name: String
    description: String
    comments: [String]
    thumbnail: String
    students: [Student]
    studentId: [String]
    tutors: [Tutor]
    tutorId: [String]
    price: Int
    tags: [String]
    status: String
}


type TutorAvailability {
    id:        ID!
    tutor:      Tutor
    tutorId:    [String]
    course:     Course
    courseId:   [String]
    startTime:  String
    endTime:    String
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
    accountBalance: Int
}

type TutorProfile {
    id: ID!
    thumbnail: String
    email: String
    username: String
    phone: String
    address: String
    timeZone: String
    accountBalance: Int
    professionalBio:String
    experienceSummary: String
    courseCanTeach: String
}

type TutorApplication {
    id: ID!
    tutorId: String
    name: String
    email: String
    courseId: String
    courseName: String
    interview: Interview
    description: String
    status:String
    appointmentDate:String
}

type Interview {
    id: ID!
    name: String
    email: String
    courseName: String
    date: String
    application: TutorApplication
    applicationId: String
    status:String
    description: String
}

type Appointment {
    id: ID!
    courseId: String
    courseName: String
    tutorId: String
    tutorName: String
    tutorEmail: String
    studentName: String
    studentEmail: String
    duration: Int
    date: String
    startTime: String
    endTime: String
    appointmentDate: String
    status:String
}

type RegisterCourse {
    id: ID!
    studentId: String
    student: Student
    courseId: String
    course: Course
    date: String
    status: String
}

type Identity {
    id: ID!
    email: String!
    userType: UserType!
}



type Query {
    finduser(id: String): PasswordResetResponse
    student(email: String): Student
    tutor(email: String): Tutor
    siteAdmin(email: String): SiteAdmin
    tutorAdmin(email: String): TutorAdmin
    course(id: String!): Course
    courses: [Course]
    getStudentList:[Student]
    getTutorList:[Tutor]
    getStudentProfile(id: String!): StudentProfile
    getTutorProfile(id: String!): TutorProfile
    getApplication: [TutorApplication]
    getSingleApplication(id: String!): TutorApplication
    getInterview: [Interview]
    getAppointments: [Appointment]
    filterCourses(
        tags: [String!],
    ): [Course]
    getTutorAvailability(tutorId: String!,courseId:String!): TutorAvailability
    getUserType(email: String!): Identity
    getSuccessfulReservation(id: String!): [Appointment]
    getStudentInfo(tutorId: String!): [Course]
    getAppointmentById(id: String!): Appointment
  }

type Mutation {
    approveApplication(id: ID!): TutorApplication
    rejectApplication(id: ID!): TutorApplication
    approveCourseApplication(id: ID!): Course
    rejectCourseApplication(id: ID!): Course
    interviewFeedback(id: ID!,description: String,status:String): Interview
    addStudent (name:String, email:String, password:String) : Student
    addTutor (name:String, email:String, password:String) : Tutor
    updateStudentProfile(id: ID!,
        email: String, thumbnail: String, username: String, phone: String,
        address: String, timeZone: String, biography: String
    ) : StudentProfile
    updateTutorProfile(
        email: String!, thumbnail: String, username: String, phone: String,
        address: String, timeZone: String,  experienceSummary: String,
        courseCanTeach: String, professionalBio: String
    ) : TutorProfile
    addCourse(name: String!, description: String, comments: [String],
        thumbnail: String, studentId: [String], tutorId: [String], price: Int, tags: [String],status: String
    ) : Course
    deleteCourse(id: ID!): Course
    deleteStudent(id: ID!, email:String): Student
    deleteTutor(id: ID!, email:String): Tutor
    addApplication(name: String, email: String, courseName: String,description:String,appointmentDate:String,tutorId:String,courseId:String) : TutorApplication
    addInterview(name: String, email: String, courseName: String, date: String
    ) : Interview
    registerCourseForStudent(studentId: ID!, courseId: ID!): RegisterCourse
    registerCourseForTutor(tutorId: ID!, courseId: ID!): Tutor
    payTheCourse(studentId: ID!, courseId: ID!): Course
    resetPassword(email: String!, password: String!): PasswordResetResponse
    addAppointment(
        courseId: String
        courseName: String,
        tutorId: String,
        tutorName: String,
        tutorEmail: String,
        studentName: String,
        studentEmail: String,
        duration: Int
        date: String
        startTime: String
        endTime: String
        appointmentDate: String
    ): Appointment
    addIdentity(email: String, userType: UserType): Identity
}
`;
