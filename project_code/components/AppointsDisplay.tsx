"use client"

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {GET_Appointment} from "@/graphql/queries";
import {useParams, useRouter} from "next/navigation";
import { useContextValue } from "@/components/context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AppointsDisplay() {
    const { getters } = useContextValue();
    const param = useParams();
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        setUserEmail(getters.userEmail);
    }, [getters.userEmail]);

    const { loading, error, data } = useQuery(GET_Appointment, {
        variables: { id: param?.id },
        fetchPolicy: 'network-only'
    });

    return (
        <div className="p-6 bg-white shadow-md rounded-lg space-y-6">
            {/*<div className="text-xl font-semibold text-center mb-4">Tutor Profile Details</div>*/}
            <div className="text-gray-700">Course Name: {data?.getAppointmentById?.courseName}</div>
            <div className="text-gray-700">Student Email: {data?.getAppointmentById?.studentEmail}</div>
            <div className="text-gray-700">Student Name: {data?.getAppointmentById?.studentName}</div>
            <div className="text-gray-700">Start Time: {data?.getAppointmentById?.startTime}</div>
            <div className="text-gray-700">End Time: {data?.getAppointmentById?.endTime}</div>
            <div className="text-gray-700">Status: {data?.getAppointmentById?.status}</div>
            <Link href="/tutor/dashboard">
                <Button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</Button>
            </Link>
        </div>
    );
}
