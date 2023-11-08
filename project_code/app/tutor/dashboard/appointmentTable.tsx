'use client'

import { useQuery } from "@apollo/client";
import { GET_APPOINTMENT } from "@/graphql/queries";
import Link from "next/link";
import {useContextValue} from "@/components/context";

const AppointmentTable = () => {
    const { getters } = useContextValue();
    const userEmail = getters.userEmail;
    const { data, loading, error } = useQuery(GET_APPOINTMENT);

    if (loading) return <p>Loading appointments...</p>;
    if (error) return <p>Error loading appointments: {error.message}</p>;

    return (
        <section className="shadow-md sm:rounded-lg">
            <h1 className="text-2xl font-extrabold dark:text-white">Appointment List</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3">Course</th>
                    <th scope="col" className="py-3">Student Email</th>
                    <th scope="col" className="py-3">Action</th>
                </tr>
                </thead>
                <tbody>
                {data?.getAppointments
                    .filter((appointment: any) => appointment.tutorEmail === userEmail)
                    .map((appointment: any) => (
                    <tr key={appointment.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {appointment.courseName}
                        </th>
                        <td className="py-4">{appointment.studentEmail}</td>
                        <td className="py-4">
                            <Link href={`/tutor/appointment/${appointment.id}/`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">More</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};

export default AppointmentTable;
