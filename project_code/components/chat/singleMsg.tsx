import {FC} from "react";
import {useQuery} from "@apollo/client";
import {GET_STUDENT_PROFILE, GET_TUTOR_PROFILE} from "@/graphql/queries";

interface singleMsgProps {
    className: string,
    message: string,
    userId: string,
    createdAt: string,
}

const SingleMsg:FC<singleMsgProps> = ({className, message, userId, createdAt}) => {

    return (
        <div className={className}>

        </div>
    )
}

export default SingleMsg