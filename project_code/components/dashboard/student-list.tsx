"use client"

import {useQuery} from "@apollo/client";
import {GET_StudentList} from "@/graphql/queries"


export default function StudentList() {
    const students = useQuery(GET_StudentList)
    console.log(students.data)

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Courses</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>
                <tr className="hover">
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr>
                <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
