'use client'

import {useParams} from "next/navigation";
import {AppointsDisplay} from "@/components/AppointsDisplay";

const TutorAppointment = () => {
    const param = useParams();
    return (
        <main className="">
            {/*{param?.id}*/}
            <AppointsDisplay />
        </main>
    )
}

export default TutorAppointment;