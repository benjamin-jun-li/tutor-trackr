"use client"
import {FC} from "react";
import { useQuery } from "@apollo/client";
import {Get_Messages} from "@/graphql/queries";
import { useParams } from "next/navigation";
import SingleMsg from "@/components/chat/singleMsg";

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
            {data?.getMessages?.map((msg: any) => (
                <SingleMsg key={msg.id} className="flex flex-row"
                           content={msg.content}
                           createdAt={msg.createdAt}
                           userId={msg.userId}
                />
            ))}
        </section>
    )
}
export default ChatMessages;