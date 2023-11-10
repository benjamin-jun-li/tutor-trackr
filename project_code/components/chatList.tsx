"use client"
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import {FC, useEffect} from "react";

interface ChatListProps {
    role: string,
}
const ChatList:FC<ChatListProps> = ({ role }) => {
    const params = useParams();
    const userID = params?.userID;
    const courseID = params?.id;

    //TODO useQuery to get all channels
    return (
        <></>
    )
}

export default ChatList;