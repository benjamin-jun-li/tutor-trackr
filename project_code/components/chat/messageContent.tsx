import {FC} from "react";

interface msgContentProps {
    content: string;
    createdAt: string;
}
const MessageContent:FC<msgContentProps> = ({content, createdAt}) => {

    return (
        <div className="flex flex-col">
            <div>{createdAt}</div>
            <div>{content}</div>
        </div>
    )
}

export default MessageContent;