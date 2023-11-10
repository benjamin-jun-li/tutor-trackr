"use client"
import {FC, useEffect, useState} from "react";
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
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        // Define the async function inside useEffect
        const fetchData = async () => {
            if (role === "student") {
                const data = await getStudentCourses({
                    variables: {
                        studentId: params?.userID
                    }
                });
                // setData(data?.getStudentCourses);
            } else {
                const data = await getTutorCourses({
                    variables: {
                        tutorId: params?.userID
                    }
                });
                console.log(data?.getTutorCourses)
                // setData(data?.getTutorCourses);
            }
        };

        // Call the async function
        fetchData();

        // If you have to clean up resources when the component
        // unmounts or when the dependencies change, return a cleanup function
        return () => {
            // Clean up code here
        };
    }, [role, params?.userID, getStudentCourses, getTutorCourses]);

    console.log(data)

    return (
        <CourseListComponent data={data} role={role} courseType={courseType}/>
    )
}

export default MyCourseList