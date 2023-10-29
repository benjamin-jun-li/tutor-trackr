"use client"
import { useQuery } from "@apollo/client"
import { GET_APPLICATION } from"@/graphql/queries"
import Link from "next/link";

const ApplicationList = () => {
    const applications = useQuery(GET_APPLICATION);
    if (applications?.loading === false && applications?.data === undefined) {
        return (
            <section>
                <h2>Tutor Application Table</h2>
                <p>No data available.</p>
            </section>
        )
    }
    return (
        <section className="w-full">
            <h2 className="text-xl font-extrabold leading-none tracking-tight
            text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Tutor Application Table</h2>
            { applications?.data ?
                (
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Course Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Candidate Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        { applications.data.getApplication?.map((application:any) => (
                            <tr key={application.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {application.courseName}
                                </th>
                                <td className="px-6 py-4">
                                    {application.email}
                                </td>
                                <td className="px-6 py-4">
                                    {application.name}
                                </td>
                                <td className="px-6 py-4">
                                    {application.date}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/admin/tutoradmin/application/${application.id}/`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">More</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                ) : (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-dots loading-md"></span>
                    </div>
                )
            }
        </section>
    )
}

export default ApplicationList