"use client"
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import React, {FC, useEffect, useState} from "react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

const pageSize = 5;

const messages = [
    {
        id: 1,
        title: "Message Title 1",
        content: "Message Content 1",
    },
    {
        id: 2,
        title: "Message Title 2",
        content: "Message Content 2",
    },
    {
        id: 3,
        title: "Message Title 3",
        content: "Message Content 3",
    },
    {
        id: 4,
        title: "Message Title 4",
        content: "Message Content 4",
    },
    {
        id: 5,
        title: "Message Title 5",
        content: "Message Content 5",
    },
    {
        id: 6,
        title: "Message Title 6",
        content: "Message Content 6",
    },
    {
        id: 7,
        title: "Message Title 7",
        content: "Message Content 7",
    },
    {
        id: 8,
        title: "Message Title 8",
        content: "Message Content 8",
    },
    {
        id: 9,
        title: "Message Title 9",
        content: "Message Content 9",
    }
].reverse();

interface ChatListProps {
    role: string,
}
const ChatList:FC<ChatListProps> = ({ role }) => {
    const params = useParams();
    const userID = params?.userID;
    const courseID = params?.id;
    const [currentPage, setCurrentPage] = useState(1);
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
    //TODO useQuery to get all channels
    return (
        <section className="flex justify-center">
            <div className="w-[95%] rounded-md border">
                <div className="p-4">
                    {visibleMessages.map((message, index) => (
                        <Link href={`/${userID}/tutor/chat/${message.id}`} key={index}>
                            <div className="cursor-pointer">
                                <div className="text-sm">
                                    <div className="font-semibold">{message.title}</div>
                                    <div>{message.content}</div>
                                </div>
                                {index !== visibleMessages.length - 1 && (
                                    <Separator className="my-2" />
                                )}
                            </div>
                        </Link>
                    ))}
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
        </section>
    )
}

export default ChatList;