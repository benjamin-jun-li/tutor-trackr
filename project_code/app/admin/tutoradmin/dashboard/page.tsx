import { Metadata } from "next"
import ApplicationList from "@/app/admin/tutoradmin/dashboard/applicationList";
import InterviewBoard from "@/app/admin/tutoradmin/dashboard/interviewSessionBoard";
import ConsultationList from "@/app/admin/tutoradmin/dashboard/consultationList";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
    return (
        <main className="mt-[5rem]">
            <h1 className="text-2xl font-extrabold leading-none tracking-tight
            text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                Welcome to Tutor Administrator Dashboard
            </h1>
            <section className="grid grid-cols-2 gap-4">
                <div className="col-span-1 mx-3">
                    <ApplicationList />
                </div>
                <div className="col-span-1 mx-3">
                    <InterviewBoard />
                </div>
            </section>
            <section className="mx-3 mt-3">
                <ConsultationList />
            </section>
        </main>
    )
}