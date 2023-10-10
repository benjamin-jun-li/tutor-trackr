import { Metadata } from "next"
import Search from "@/components/dashboard/search";
import CourseFilter from "@/components/dashboard/course-filter";
import CourseList from "@/components/dashboard/courseList";
import AppointmentCalendar from "@/components/dashboard/AppmtCalendar";

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
}

export default function DashboardPage() {

  return (
    <section className="space-y-4 p-8 mt-[5rem]">
        <div className="grid grid-cols-3 mx-10 place-items-center">
          <Search />
          <CourseFilter />
          <div className="col-span-2 flex flex-col justify-center items-center space-y-2">
            <CourseList role={"student"}/>
          </div>
          <div className="col-span-1 flex flex-col items-center space-y-2">
              <AppointmentCalendar />
          </div>
        </div>
    </section>
  );
}
