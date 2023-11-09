'use client'

import {useParams} from "next/navigation";
import {AppointsDisplay} from "@/components/AppointsDisplay";

const TutorAppointment = () => {
    const params = useParams();
    return (
        <main className="">
            <AppointsDisplay />
        </main>
    )
}

export default TutorAppointment;