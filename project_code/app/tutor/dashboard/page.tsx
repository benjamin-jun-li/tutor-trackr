import { Metadata } from "next"
import CourseList from "@/app/tutor/dashboard/course-list";
import MessageBox from "@/app/tutor/dashboard/message-box";
import TutorAppointment from "@/app/tutor/dashboard/tutor-appmt";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

const DashboardPage = () => {
    return (
        <section className="grid grid-cols-3 gap-4 mt-[8rem] px-6">
            <div className="col-span-2">
                <CourseList />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <MessageBox />
                <TutorAppointment />
            </div>
        </section>
    )
}

export default DashboardPage