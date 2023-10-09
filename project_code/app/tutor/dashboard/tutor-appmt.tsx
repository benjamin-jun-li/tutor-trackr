"use client"
import {Calendar} from "@/components/ui/calendar";
import { useState } from "react";

const TutorAppointment = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
        <section className="flex flex-col justify-center items-center">
            <h3 className="text-2xl mb-4">
                Your Upcoming Appointments
            </h3>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
            />
        </section>
    )
}

export default TutorAppointment