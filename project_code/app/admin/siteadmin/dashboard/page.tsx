"use client";

import { GET_COURSES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export default function DashboardPage() {
  const { data, loading, error } = useQuery(GET_COURSES);

  if (data) console.log(data.course);

  return (
    <section>
      <div className="flex-1 space-y-4 p-8 pt-6 mt-10">
        <div className="grid grid-cols-2 gap-2">
          <h1>Placeholder</h1>
          <div className="overflow-y-auto h-60">
            {data &&
              data.course.map((course: any) => (
                <div className="collapse bg-base-200 my-2" key={course.id}>
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">
                    {course.name}
                  </div>
                  <div className="collapse-content">
                    <p>{course.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
