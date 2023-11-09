"use client"

import {useQuery} from "@apollo/client";
import {GET_StudentList} from "@/graphql/queries"
import {useState} from "react";
import {DELETE_Student} from "@/graphql/mutations";
import {useMutation} from "@apollo/client";

export default function StudentList() {
    const studentList = useQuery(GET_StudentList)
    const [deleteStudentMutation,{data, loading, error}] = useMutation(DELETE_Student,{
        refetchQueries: [{query: GET_StudentList}]
    })
    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentId, setStudentId] = useState("");
    const deleteStudent = (id: string) => {
        deleteStudentMutation({variables: {id: id,email:studentEmail}}).then()
    }


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Student name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Course
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {studentList.data?.getStudentList?.map((student: any) => (
                    <tr id={student.id} key={student.id}
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {student.name}
                        </th>
                        <td className="px-6 py-4">
                            {student.email}
                        </td>
                        <td className="px-6 py-4">
                            {student.courses?.map((course: any, index: number) => (
                               <p key={course.id}> {course.name}</p>
                            ))}
                        </td>
                        <td className="px-6 py-4">
                            <button
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline focus:z-10"
                                onClick={() => {
                                    const modal = document.getElementById('my_modal_5');
                                    if (modal) { modal.showModal() }
                                    setStudentName(student.name);
                                    setStudentEmail(student.email);
                                    setStudentId(student.id);
                                }}
                            >
                                Delete
                            </button>

                        </td>
                    </tr>))}
                </tbody>
            </table>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Alert!</h3>
                    <p className="py-4">Do you want to delete {studentName}: {studentEmail}</p>
                    <div className="modal-action flex justify-between">
                        <form method="dialog" className="flex justify-between w-full">
                            <button className="btn" onClick={() => deleteStudent(studentId)}>Confirm</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}