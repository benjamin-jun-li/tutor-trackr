import CourseDetail from "@/app/student/course/[id]/course-detail";
import InteractBox from "@/app/student/course/[id]/interactBox";
const CoursePageStu = () =>{
    return (
        <article>
            <CourseDetail role={"student"}/>
            <InteractBox />
        </article>
    )
}

export default CoursePageStu