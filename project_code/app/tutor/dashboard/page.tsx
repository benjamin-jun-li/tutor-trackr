import { Metadata } from "next"
import CourseList from "@/components/dashboard/courseList";
import AppointmentTable from "@/app/tutor/dashboard/appointmentTable";
export const metadata: Metadata = {
    title: "Tutor Dashboard",
    description: "Tutor interface",
}

const DashboardPage = () => {
    return (
        <section className="grid grid-cols-8 gap-4 mt-[8rem] px-6">
            <div className="col-span-5">
                <CourseList role={"tutor"}/>
            </div>
            <div className="col-span-3">
                <AppointmentTable />
            </div>
        </section>
    )
}

export default DashboardPage