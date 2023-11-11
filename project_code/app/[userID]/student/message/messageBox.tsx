'use client'

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React, {useState} from "react";
import {useParams} from "next/navigation";
import {useQuery} from "@apollo/client";
import {GET_STUDENT_NOTIFICATION} from "@/graphql/queries";

const pageSize = 5;

// const messages = [
//     {
//         id: 1,
//         title: "Message Title 1",
//         content: "Message Content 1",
//     },
//     {
//         id: 2,
//         title: "Message Title 2",
//         content: "Message Content 2",
//     },
//     {
//         id: 3,
//         title: "Message Title 3",
//         content: "Message Content 3",
//     },
//     {
//         id: 4,
//         title: "Message Title 4",
//         content: "Message Content 4",
//     },
//     {
//         id: 5,
//         title: "Message Title 5",
//         content: "Message Content 5",
//     },
//     {
//         id: 6,
//         title: "Message Title 6",
//         content: "Message Content 6",
//     },
//     {
//         id: 7,
//         title: "Message Title 7",
//         content: "Message Content 7",
//     },
//     {
//         id: 8,
//         title: "Message Title 8",
//         content: "Message Content 8",
//     },
//     {
//         id: 9,
//         title: "Message Title 9",
//         content: "Message Content 9",
//     }
// ].reverse();

const MessageBox = () => {
    const params = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    const {data, loading, error} = useQuery(GET_STUDENT_NOTIFICATION, {
        variables: {
            tutorId: params?.userID
        }
    });

    const messages = data?.getTutorNotification.map((notification: any, index: number) => ({
        id: index,
        title: "Notification",
        content: notification.content
    })).reverse() || [];

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const visibleMessages = messages.slice(startIndex, endIndex);

    const totalPages = Math.ceil(messages.length / pageSize);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section>
            <div className="h-full min-w-[14rem] rounded-md border overflow-auto">
                <div className="p-4">
                    {visibleMessages.length > 0 ? (
                        visibleMessages.map((message: any, index: number) => (
                            <div className="cursor-pointer" key={index}>
                                <div className="text-sm">
                                    <div className="font-semibold">{message.title} {index + 1}</div>
                                    <div>{message.content}</div>
                                </div>
                                {index !== visibleMessages.length - 1 && <Separator className="my-2" />}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-4">No message</div>
                    )}
                </div>
                {totalPages > 1 && (
                    <div className="join flex justify-center items-center mb-2">
                        <button
                            onClick={prevPage}
                            className="join-item btn"
                            disabled={currentPage === 1}
                        >
                            «
                        </button>
                        <button className="join-item btn">
                            {currentPage}
                        </button>
                        <button
                            onClick={nextPage}
                            className="join-item btn"
                            disabled={currentPage === totalPages}
                        >
                            »
                        </button>
                    </div>
                )}
            </div>
            <Link href={`/${params?.userID}/student/dashboard`}>
                <button className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">Back</button>
            </Link>
        </section>
    );
};


export default MessageBox;
