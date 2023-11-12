import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import StudentBioDisplay from "@/components/StudentBioDisplay";

interface ProfileTableProps {
    data: any[];
    role: 'tutor' | 'student'; // Added role to props to mimic the example's logic
}

const ProfileTable: FC<ProfileTableProps> = ({ data, role }) => {
    const params = useParams();

    if (data.length === 0) {
        return (
            <div className="w-full md:w-3/4 p-4 my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-xl font-medium text-gray-900 dark:text-white">No students in this course</h2>
            </div>
        );
    }

    return (
        <div className="w-full md:w-3/4 p-4 my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Students in this Course</h5>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data.map((student) => (
                        <li key={student.id} className="py-3 sm:py-4">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={`item-${student.id}`}>
                                    <AccordionTrigger className="flex flex-row justify-between">
                                        <div>
                                            <img className="w-8 h-8 rounded-full" src={student?.profile?.thumbnail ? student?.profile?.thumbnail : "/default-user.png"} alt="Neil image" />
                                        </div>
                                        {
                                            role === 'tutor' ? (
                                                <div className="hover:!no-underline">
                                                    {student.name}&nbsp;&nbsp;&nbsp;{student.email}
                                                </div>
                                            ) : (
                                                <Link href={`/${params?.userID}/student/other-profile/${student.id}`}>
                                                    <div className="hover:!no-underline">
                                                        {student.name}&nbsp;&nbsp;&nbsp;{student.email}
                                                    </div>
                                                </Link>
                                            )
                                        }
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <StudentBioDisplay studentId={student.id} />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfileTable;
