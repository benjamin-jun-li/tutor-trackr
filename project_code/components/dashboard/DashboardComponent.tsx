"use client"
import React, { useState } from 'react';
import CourseFilter from "@/components/dashboard/course-filter";
import CourseList from "@/components/dashboard/courseList";
import AppointmentCalendar from "@/components/dashboard/AppmtCalendar";
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
          <div className="mb-4">
            <CourseFilter onFilterChange={setFilters} />
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <div className="col-span-2 flex flex-col justify-center items-center space-y-2">
              <CourseList role={"student"} filters={filters} />
            </div>
            <div className="col-span-1 flex flex-col items-center space-y-2">
              <AppointmentCalendar />
            </div>
          </div>
        </div>
    </section>
  );
}
