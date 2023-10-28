import CourseDetail from "@/app/student/course/[id]/course-detail";
import InteractBoxStudent from "@/app/student/course/[id]/interactBoxStudent";

const CoursePageTut = () => {
    return (
        <main className="mt-[5rem] grid grid-cols-3 px-24">
            <CourseDetail role={"tutor"}/>
            <InteractBoxStudent />
        </main>
    )
}

export default CoursePageTut