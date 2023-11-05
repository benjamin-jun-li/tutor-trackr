"use client"
import React, { useState } from 'react';
import CourseFilter from "@/components/dashboard/course-filter";
import CourseList from "@/components/dashboard/courseList";
import { Filters } from "@/components/dashboard/filters";

export default function DashboardComponent() {
  const [filters, setFilters] = useState<Filters>({
    timeZone: null,
    courseType: null,
    experienceLevel: null
  });

  return (
    <section className="space-y-4 p-8 mt-[5rem]">
        <div className="mx-10">
          <div className="flex justify-center items-center mb-4">
            <CourseFilter onFilterChange={setFilters} />
          </div>
          <div className="place-items-center">
            <div className="flex flex-col justify-center items-center">
              <CourseList role={"student"} filters={filters} />
            </div>
          </div>
        </div>
    </section>
  );
}
