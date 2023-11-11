import { Metadata } from "next";
import CourseTab from "@/components/dashboard/courseTab";
import AppointmentTable from "@/app/[userID]/student/dashboard/appointmentTable";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student interface",
}

export interface Course_type {
  id:   string,
  name: string,
  description: string,
  comments: string[],
  thumbnail: string,
  tags: string[],
}

export default function DashboardPage() {
    return (
        <section className="mt-[5rem]">
            <section className="grid grid-cols-8 gap-4">
                <div className="col-span-5">
                    <CourseTab role={"student"}/>
                </div>
                <div className="col-span-3">
                    <AppointmentTable />
                </div>
            </section>
        </section>
    );
}