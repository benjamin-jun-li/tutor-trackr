"use client"
import { useQuery } from "@apollo/client"
import {GET_INTERVIEW} from"@/graphql/queries"

const InterviewBoard = () => {
    const interviews = useQuery(GET_INTERVIEW)
    return (
        <div className="w-full">
            <h2>Tutor Interview Board</h2>
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
                            <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (<span className="loading loading-dots loading-md"></span>) }

        </div>
    )
}

export default InterviewBoard