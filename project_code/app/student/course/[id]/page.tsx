import CourseDetail from "@/app/student/course/[id]/course-detail";
import InteractBox from "@/app/student/course/[id]/interactBox";
const CoursePageStu = () =>{
    return (
        <main className="mt-[5rem] grid grid-cols-3 px-24">
            <CourseDetail role={"student"}/>
            <InteractBox />
        </main>
    )
}

export default CoursePageStu