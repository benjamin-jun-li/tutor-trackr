"use client"
import { FC } from "react";
import { GET_TUTOR_COURSES, GET_STUDENT_COURSES } from "@/graphql/queries";
import {useQuery} from "@apollo/client";
import CourseListComponent from "@/components/dashboard/courseListComponent";

interface MyCourseProps{
    role: string,
    courseType: string
}
const MyCourseList:FC<MyCourseProps> = ({role, courseType}) => {
    if (role === "student") {
        const {data, loading, error} = useQuery(GET_STUDENT_COURSES, {
            variables:{
                studentId: "6548da33d399acae11184312"
            }
        })
        return (
            <CourseListComponent data={data?.courses} role={role} courseType={courseType}/>
        )
    } else {
        const {data, loading, error} = useQuery(GET_TUTOR_COURSES, {
            variables:{
                tutorId: "6548da33d399acae11184312"
            }
        })
        return (
            <CourseListComponent data={data?.courses} role={role} courseType={courseType}/>
        )
    }
}

export default MyCourseList