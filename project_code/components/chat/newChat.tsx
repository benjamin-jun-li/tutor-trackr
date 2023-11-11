import {FC} from "react";

interface newChatProps {
    className: string,
}

const NewChat:FC<newChatProps> = ({ className }) => {
    return (
        <div className={className}>

        </div>
    )
}
export default NewChat;