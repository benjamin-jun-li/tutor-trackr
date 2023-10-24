"use client"
import { FC } from "react";
import { useParams } from "next/navigation";

const CourseDetail:FC<{ role:string }> = ({ role }) => {
    const params = useParams();
    const id = params?.id

    return (
        <></>
    )
}

export default CourseDetail