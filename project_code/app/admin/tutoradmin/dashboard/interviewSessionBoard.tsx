"use client"
import { useQuery } from "@apollo/client"
import { GET_INTERVIEW } from"@/graphql/queries"
import Link from "next/link";

const InterviewBoard = () => {
    const interviews = useQuery(GET_INTERVIEW);
    if (interviews?.data?.getInterview?.length === 0 && interviews?.loading === false) {
        return (
            <section>
                <h2 className="text-xl font-extrabold leading-none tracking-tight
            text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Tutor Interview Board</h2>
                <p className="flex justify-center">No data available</p>
            </section>
        )
    }
    return (
        <section className="w-full p-2">
            <h2 className="text-xl my-2 font-extrabold leading-none tracking-tight
            text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Tutor Interview Board</h2>
            { interviews?.data ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Course Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Applicant Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Applicant email
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
                        {interviews.data.getInterview?.map((interview : any) => (
                            <tr key={interview.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {interview.courseName}
                                </th>
                                <td className="px-6 py-4">
                                    {interview.name}
                                </td>
                                <td className="px-6 py-4">
                                    {interview.email}
                                </td>
                                <td className="px-6 py-4">
                                    {interview.date}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/interview/${interview.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">More</Link>
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
            ) }
        </section>
    )
}

export default InterviewBoard