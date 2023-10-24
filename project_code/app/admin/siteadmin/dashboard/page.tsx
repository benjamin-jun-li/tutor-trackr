import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker"
import StudentList from "@/app/admin/siteadmin/dashboard/student-list"
import CourseList from "@/app/admin/siteadmin/dashboard/course-list";



export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
    return (
        <section>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-20">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <div className="flex items-center space-x-2">
                        <CalendarDateRangePicker />
                        <Button>Download</Button>
                    </div>
                </div>
                <StudentList />
                <CourseList />
            </div>
        </section>
    )
}