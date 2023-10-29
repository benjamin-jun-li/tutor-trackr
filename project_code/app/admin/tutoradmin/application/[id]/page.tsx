"use client"
import { GET_APPLICATION_BY_ID } from "@/graphql/queries";
import {useQuery} from "@apollo/client";
import { useParams } from "next/navigation";

const ApplicationPage = () => {
    const param = useParams()
    const application = useQuery(GET_APPLICATION_BY_ID, {variables:{ id: param?.id}})
    console.log(application);
    return (
        <></>
    )
}

export default ApplicationPage

