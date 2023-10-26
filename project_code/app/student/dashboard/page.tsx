import React from 'react';
import SearchContainer from "@/components/dashboard/searchcontainer";
import CourseFilter from "@/components/dashboard/course-filter";
import CourseList from "@/components/dashboard/courseList";
import AppointmentCalendar from "@/components/dashboard/AppmtCalendar";
import { Metadata } from "next";

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
        <div className="mx-10">
          <div className="mb-4">
            <CourseFilter />
          </div>
          <div className="mb-4">
            <SearchContainer />
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <div className="col-span-2 flex flex-col justify-center items-center space-y-2">
              <CourseList role={"student"}/>
            </div>
            <div className="col-span-1 flex flex-col items-center space-y-2">
              <AppointmentCalendar />
            </div>
          </div>
        </div>
    </section>
  );
}