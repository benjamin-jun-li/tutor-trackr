"use client"

import { useQuery } from "@apollo/client";
import {GET_Appointment} from "@/graphql/queries";
import {useParams, useRouter} from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AppointsDisplay = () => {
    const params = useParams();
    const { loading, error, data } = useQuery(GET_Appointment, {
        variables: { id: params?.id },
        fetchPolicy: 'network-only'
    });

    return (
        <div className="p-6 bg-white shadow-md rounded-lg space-y-6">
            <div className="text-gray-700">Course Name: {data?.getAppointmentById?.courseName}</div>
            <div className="text-gray-700">Student Email: {data?.getAppointmentById?.studentEmail}</div>
            <div className="text-gray-700">Student Name: {data?.getAppointmentById?.studentName}</div>
            <div className="text-gray-700">Start Time: {data?.getAppointmentById?.startTime}</div>
            <div className="text-gray-700">End Time: {data?.getAppointmentById?.endTime}</div>
            <div className="text-gray-700">Status: {data?.getAppointmentById?.status}</div>
            <Link href={`${params.userID}/tutor/dashboard`}>
                <Button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</Button>
            </Link>
        </div>
    );
}

export default AppointsDisplay