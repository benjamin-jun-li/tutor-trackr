import Search from "@/components/dashboard/search";
import CourseFilter from "@/components/dashboard/course-filter";
import CourseList from "@/components/dashboard/courseList";
import AppointmentCalendar from "@/components/dashboard/AppmtCalendar";

export interface Course_type {
  id:   string,
  name: string,
  description: string,
  comments: string[],
  thumbnail: string,
}

export default function DashboardPage() {

  return (
    <section>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Search />
        <h2 className="font-bold text-2xl">View Courses</h2>
        <CourseFilter />
        <div className="flex flex-row justify-between mx-10">
          <div className="col-span-2 flex flex-col justify-center items-center space-y-2">
            <CourseList />
          </div>
          <div className="col-span-1 flex flex-col items-center space-y-2">
              <AppointmentCalendar />
          </div>
        </div>
      </div>
    </section>
  );
}
