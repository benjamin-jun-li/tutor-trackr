"use client"
import { FC } from "react";

interface CourseDetailProps {
    detail:{
        name: string,
        description: string,
    }
}

const CourseDetailStu:FC<CourseDetailProps> = ({ detail }) =>{
    return (
        <article>
            <h2>course name</h2>
        </article>
    )
}

export default CourseDetailStu