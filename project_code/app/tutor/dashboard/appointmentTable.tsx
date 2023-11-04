const AppointmentTable = () => {
    return (
        <section className="shadow-md sm:rounded-lg">
            <h1 className="text-2xl font-extrabold dark:text-white">Appointment List</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3">
                        Course
                    </th>
                    <th scope="col" className="py-3">
                        Student Email
                    </th>
                    <th scope="col" className="py-3">
                        Date
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple
                    </th>
                    <td className="py-4">
                        Silver
                    </td>
                    <td className="py-4">
                        Laptop
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}

export default AppointmentTable