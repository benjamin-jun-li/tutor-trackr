"use client"
import Image from "next/image";
import { Course_type } from "@/app/student/dashboard/page";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from "@/graphql/queries";
import { FC } from "react"
import Link from "next/link";
import { Filters } from "@/components/dashboard/filters";

interface CourseListProps {
    role: string;
    filters: Filters;
}

const CourseList: FC<CourseListProps> = ({ role, filters }) => {
    const { data, loading, error } = useQuery(GET_COURSES);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    const filteredCourses = data.courses.filter((course: Course_type) => {
        console.log(`Filtering course: ${course.name}`);
        
        const lowerCaseTags = course.tags.map(tag => tag.toLowerCase());
        console.log(`Course tags (lowercased):`, lowerCaseTags);
        console.log(`Filters:`, filters);
    
        if (filters.timeZone && !lowerCaseTags.includes(filters.timeZone.toLowerCase())) {
            console.log('Rejected by timeZone');
            return false;
        }
        if (filters.courseType && !lowerCaseTags.includes(filters.courseType.toLowerCase())) {
            console.log('Rejected by courseType');
            return false;
        }
        if (filters.experienceLevel && !lowerCaseTags.includes(filters.experienceLevel.toLowerCase())) {
            console.log('Rejected by experienceLevel');
            return false;
        }
    
        console.log('Course accepted');
        return true;
    });
    
    return (
        <section className="">
            <div className="flex">
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                {filteredCourses.length === 0 ? "There are no courses under this entry." : "Courses"}
            </h2>

                { role === "tutor" &&
                    <Link href="/tutor/application">
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2">Add course</button>
                    </Link>
                }
            </div>

            <div className="border-solid border-2 border-sky-400 rounded-md
            col-span-2 flex flex-col justify-center items-center space-y-2">
                <div className="grid grid-cols-3 gap-4">
                    {filteredCourses.map((course: Course_type) => (
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
                                    <Link href={`/${role}/course/${course.id}`}>
                                        <button className="btn btn-primary">More</button>
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CourseList;
