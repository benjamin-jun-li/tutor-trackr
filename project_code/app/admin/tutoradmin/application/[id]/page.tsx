"use client"
import { GET_APPLICATION_BY_ID } from "@/graphql/queries";
import {useQuery} from "@apollo/client";
import { useParams } from "next/navigation";

const ApplicationPage = () => {
    const param = useParams()
    const application = useQuery(GET_APPLICATION_BY_ID, {variables:{ id: param?.id}})
    console.log(application);
    return (
        <main className="mt-[6rem]">
            <h1>title</h1>
        </main>
    )
}

export default ApplicationPage

