import { Metadata } from "next"
import AppointmentTable from "@/app/[userID]/tutor/dashboard/appointmentTable";
import CourseTab from "@/components/dashboard/courseTab";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import AddCourseIcon from "@/assets/addCourseIcon.svg";
import MsgIcon from "@/assets/message.svg";
export const metadata: Metadata = {
    title: "Tutor Dashboard",
    description: "Tutor interface",
}

const DashboardPage = () => {
    return (
        <main className="mt-[8rem] px-6">
            <section className="hidden mb-6 sm:flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center items-center">
                <Link href="/tutor/application" className="w-30 sm:w-[35rem] mx-4 px-[2rem] py-2 flex flex-row justify-between items-center border-2 border-sky-500 rounded-md ">
                    <Image src={AddCourseIcon}  alt={"add course icon"} width={50} height={50}/>
                    <div className="flex flex-col px-6 font-medium">
                        <p className="text-lg">Tallor TutorTrackr for your needs</p>
                        <p>Add courses in your expertise</p>
                    </div>
                    <ChevronRight width={30} height={30} />
                </Link>
                <Link href="/tutor/application" className="w-30 sm:w-[35rem] mx-4 px-[2rem] py-2 flex flex-row justify-between items-center border-2 border-sky-500 rounded-md ">
                    <Image src={MsgIcon}  alt={"add course icon"} width={50} height={50}/>
                    <div className="flex flex-col px-6 font-medium">
                        <p className="text-lg">Track your sessions effortlessly</p>
                        <p>View messages in TutorTrackr</p>
                    </div>
                    <ChevronRight width={30} height={30} />
                </Link>
            </section>
            <section className="grid grid-cols-8 gap-4">
                <div className="col-span-5">
                    <CourseTab role={"tutor"}/>
                </div>
                <div className="col-span-3">
                    <AppointmentTable />
                </div>
            </section>
        </main>

    )
}

export default DashboardPage