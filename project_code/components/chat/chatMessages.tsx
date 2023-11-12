"use client"
import {FC} from "react";
import { useQuery } from "@apollo/client";

interface chatMsgProps {
    className: string,
    apiUrl: string,
    socketUrl: string,
    conversationId: string | string[] | undefined
}

const ChatMessages:FC<chatMsgProps> = ({ className, apiUrl, socketUrl, conversationId }) => {

    return (
        <div className={className}>

        </div>
    )
}
export default ChatMessages;