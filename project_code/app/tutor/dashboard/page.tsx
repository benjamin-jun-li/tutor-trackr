import { Metadata } from "next"
import AppointmentTable from "@/app/tutor/dashboard/appointmentTable";
import CourseTab from "@/app/tutor/dashboard/courseTab";
export const metadata: Metadata = {
    title: "Tutor Dashboard",
    description: "Tutor interface",
}

const DashboardPage = () => {
    return (
        <section className="grid grid-cols-8 gap-4 mt-[8rem] px-6">
            <div className="col-span-5">
                <CourseTab role={"tutor"}/>
            </div>
            <div className="col-span-3">
                <AppointmentTable />
            </div>
        </section>
    )
}

export default DashboardPage