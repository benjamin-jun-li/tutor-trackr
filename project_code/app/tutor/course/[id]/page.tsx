import CourseDetail from "@/app/student/course/[id]/course-detail";
import InteractBoxTutor from "@/app/tutor/course/[id]/interactBoxTutor";

const CoursePageTut = () => {
    return (
        <main className="mt-[5rem] grid grid-cols-3 px-24">
            <CourseDetail role={"tutor"}/>
            <InteractBoxTutor />
        </main>
    )
}

export default CoursePageTut