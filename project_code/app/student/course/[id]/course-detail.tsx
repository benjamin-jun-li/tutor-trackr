"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FC } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_COURSE } from "@/graphql/queries";
import {useContextValue} from "@/components/context";

const CourseDetail:FC<{ role:string }> = ({ role }) => {
    const params = useParams();
    const { getters } = useContextValue();
    const getCourseDetail = useQuery(GET_COURSE, {variables:{ id:params?.id }});
    if (getCourseDetail.data)console.log(getCourseDetail.data);
    return (
        getCourseDetail.data ?
            (
                <section className="col-span-2">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link href={`/${getters.userIdentity}/dashboard/`} className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                    </svg>
                                    Dashboard
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span className="ml-1 text-md font-medium text-gray-500 md:ml-2 dark:text-gray-400">{getCourseDetail?.data?.course?.name}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="my-6 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">{getCourseDetail?.data?.course?.name}</h1>
                    <div className="w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="rounded-t-lg" src={getCourseDetail.data.course?.thumbnail} alt="null" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{getCourseDetail.data.course?.description || "sample description"}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                ratings: <br/>
                                students:
                            </p>
                        </div>
                    </div>

                    <div className="w-3/4 p-4 mt-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Available Tutors</h5>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {getCourseDetail.data.course?.tutors.map((tutor:any) => (
                                    <li key={tutor.id} className="py-3 sm:py-4">
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger className="flex flex-row justify-between">
                                                    <div>
                                                        <img className="w-8 h-8 rounded-full" src="" alt="Neil image" />
                                                    </div>
                                                    <div className="hover:!no-underline">
                                                        {tutor.name}&nbsp;&nbsp;&nbsp;{tutor.email}
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    I am proficient in Scala and Hadoop
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </section>
            ) : (
                <section className="col-span-2 flex justify-center items-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </section>
            )
    )
}

export default CourseDetail