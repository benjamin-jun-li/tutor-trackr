"use client"
import {FC, useEffect, useState, useRef} from "react";
import { GET_TUTOR_COURSES, GET_STUDENT_COURSES } from "@/graphql/queries";
import {useLazyQuery, useQuery} from "@apollo/client";
import CourseListComponent from "@/components/dashboard/courseListComponent";
import {useParams} from "next/navigation";

interface MyCourseProps{
    role: string,
    courseType: string
}
const MyCourseList:FC<MyCourseProps> = ({role, courseType}) => {
    const params = useParams();
    const [getStudentCourses, {data: studentCourses, loading: studentLoading, error: studentError}] = useLazyQuery(GET_STUDENT_COURSES);
    const [getTutorCourses, {data: tutorCourses, loading: tutorLoading, error: tutorError}] = useLazyQuery(GET_TUTOR_COURSES);
    const data:any = useRef([]);
    useEffect(() => {
        if (role === "student") {
            getStudentCourses({
                variables: {
                    studentId: params?.userID
                }
            }).then((res) => {
                data.current = res;
            });
        } else {
            getTutorCourses({
                variables: {
                    tutorId: params?.userID
                }
            }).then((res) => {
                data.current = res;
                console.log(res.data.getTutorCourses);
            });

        }
    }, []);
    // console.log(data);
    return (
        <></>
    )

    return (
        <CourseListComponent data={data} role={role} courseType={courseType}/>
    )
}

export default MyCourseList