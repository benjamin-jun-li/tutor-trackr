import {FC} from "react";
import {useQuery} from "@apollo/client";
import {GET_STUDENT_PROFILE, GET_TUTOR_PROFILE} from "@/graphql/queries";
import MessageContent from "@/components/chat/messageContent";
import Image from "next/image";

interface singleMsgProps {
    className: string,
    content: string,
    userId: string,
    createdAt: string,
}

const SingleMsg:FC<singleMsgProps> = ({className, content, userId, createdAt}) => {
    const createdTime = new Date(parseInt(createdAt));
    const dateString = createdTime.toLocaleString();
    return (
        <div className={className}>
            <div>thumbnail</div>
            <MessageContent content={content} createdAt={dateString}/>
        </div>
    )
}

export default SingleMsg