"use client"
import { useState, FC } from 'react';
import CourseFilter from "@/components/dashboard/course-filter";
import CourseList from "@/components/dashboard/courseList";
import { Filters } from "@/components/dashboard/filters";
const DashboardComponent:FC<{role:string}> = ({role}) => {
  const [filters, setFilters] = useState<Filters>({
    timeZone: null,
    courseType: null,
    experienceLevel: null
  });

  return (
    <section className="space-y-4 p-8">
        <div className="mx-10">
          {role === "student" &&
              <div className="flex justify-center items-center mb-4">
                <CourseFilter onFilterChange={setFilters} />
              </div>
          }
          <div className="place-items-center">
            <div className="flex flex-col justify-center items-center">
              <CourseList role={role} filters={filters} />
            </div>
          </div>
        </div>
    </section>
  );
}

export default DashboardComponent
