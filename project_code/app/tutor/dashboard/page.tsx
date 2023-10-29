import { Metadata } from "next"
import CourseList from "@/components/dashboard/courseList";
import MessageBox from "@/app/tutor/dashboard/messageBox";
import AppointmentCalendar from "@/components/dashboard/AppmtCalendar";

export const metadata: Metadata = {
    title: "Tutor Dashboard",
    description: "Tutor interface",
}

const DashboardPage = () => {
    return (
        <section className="grid grid-cols-3 gap-4 mt-[8rem] px-6">
            <div className="col-span-2">
                <CourseList role={"tutor"}/>
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <MessageBox />
                <AppointmentCalendar />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded" 
                    // onClick={() => window.location.href='/path-to-new-page'}
                >
                    View Student Information
                </button>
            </div>
        </section>
    )
}

export default DashboardPage