"use client"
import { useState, FC } from 'react';
import CourseFilter from "@/components/dashboard/course-filter";
import AllCourseList from "@/components/dashboard/allCourseList";
import { FiltersType } from "@/components/dashboard/course-filter";
import MyCourseList from "@/components/dashboard/myCourseList";

interface DashboardComponentProps {
  role: string,
  courseType: string,
}

const DashboardComponent:FC<DashboardComponentProps> = ({ role, courseType}) => {
  const [filters, setFilters] = useState<FiltersType>({
    timeZone: null,
    courseLevel: null,
    experienceLevel: null
  });

  return (
    <section className="space-y-4 py-4">
        <div className="mx-10">
          {role === "student" && courseType === "all" &&
              <div className="flex justify-center items-center mb-4">
                <CourseFilter onFilterChange={setFilters} />
              </div>
          }
          <div className="place-items-center">
            <div className="flex flex-col justify-center items-center">
              { courseType === "all" ? (
                  <AllCourseList role={role} courseType={courseType} filters={filters} />
              ) : (
                  <MyCourseList role={role} courseType={courseType}/>
              )}
            </div>
          </div>
        </div>
    </section>
  );
}

export default DashboardComponent
