import Link from "next/link";

const AppointmentList = () => {
    return (
        <div>
            <h2>Appointments</h2>

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
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            COMP6080
                        </th>
                        <td className="px-6 py-4">
                            Darian
                        </td>
                        <td className="px-6 py-4">
                            Oliver
                        </td>
                        <td className="px-6 py-4">
                            30min
                        </td>
                        <td className="px-6 py-4">
                            12.04.2023
                        </td>
                        <td className="px-6 py-4">
                            <Link href={`/consultation/`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">More</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AppointmentList