"use client"
import Link from "next/link";
import { GET_APPOINTMENT } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

const AppointmentList = () => {
    const appointments = useQuery(GET_APPOINTMENT)
    if (appointments.data) console.log(appointments.data)
    return (
        <section className="p-2">
            <h2 className="text-xl mb-2 font-extrabold leading-none tracking-tight
            text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Appointments</h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Course
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tutor
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Student
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Duration
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointments.data?.getAppointments.map((appointment) => (
                        <tr key={appointment.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {appointment.courseName}
                            </th>
                            <td className="px-6 py-4">
                                {appointment.tutorName}
                            </td>
                            <td className="px-6 py-4">
                                {appointment.studentName}
                            </td>
                            <td className="px-6 py-4">
                                {appointment.startTime || "1 hour"}
                            </td>
                            <td className="px-6 py-4">
                                12.04.2023
                            </td>
                            <td className="px-6 py-4">
                                <Link href={`/appointment/`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">More</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default AppointmentList