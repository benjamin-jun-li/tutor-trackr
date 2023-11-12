"use client"
import {FC} from "react";
import { useQuery } from "@apollo/client";
import {Get_Messages} from "@/graphql/queries";
import { useParams } from "next/navigation";

interface chatMsgProps {
    className: string,
    apiUrl: string,
    socketUrl: string,
    conversationId: string | string[] | undefined
}

const ChatMessages:FC<chatMsgProps> = ({ className, apiUrl, socketUrl, conversationId }) => {
    const params = useParams();
    const {data, loading, error} = useQuery(Get_Messages,{
        variables:{
            conversationId: params?.conversationID
        },
        pollInterval: 200
    })
    return (
        <section className={className}>
            {data?.getMessages?.map((msg) => (
                <div key={msg.id} className="flex flex-col md:flex-row">
                    <div></div>
                    <div>{msg.content}</div>
                </div>
            ))}
        </section>
    )
}
export default ChatMessages;