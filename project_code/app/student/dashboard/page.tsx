"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { GET_COURSES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Search from "@/components/dashboard/search";
import CourseFilter from "@/components/dashboard/course-filter";

export interface Course_type {
  id:   string,
  name: string,
  description: string,
  comments: string[],
  thumbnail: string,
}

export default function DashboardPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { data, loading, error } = useQuery(GET_COURSES);

  return (
    <section>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Search />
        <h2 className="font-bold text-2xl">View Courses</h2>
        <CourseFilter />
        <div className="flex flex-row justify-between mx-10">
          <div className="col-span-2 flex flex-col justify-center items-center space-y-2">
            <div className="grid grid-cols-3 gap-4">
              {data &&
                data.course.map((course: Course_type) => (
                  <div
                    id={course.id}
                    className="card card-compact bg-base-100 shadow-xl"
                    key={course.id}
                  >
                    <figure>
                      <Image src="/front-end.jpg" alt="FrontEnd" width={300} height={300} />
                    </figure>
                    <article className="card-body">
                      <h2 className="card-title">{course.name}</h2>
                      <p>Front-end test</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                      </div>
                    </article>
                  </div>
                ))}
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-center items-center space-y-2">
              <h3 className="flex justify-center items-center text-2xl">
                Your Reservation
              </h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
