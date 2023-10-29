import Combobox from "@/components/ui/combo-box";

const timeZones = [
    { value: "utc", label: "UTC" },
    { value: "est", label: "Eastern Standard Time" },
];

const courseTypes = [
    { value: "web", label: "Web Development" },
    { value: "data", label: "Data Science" },
];

const experienceLevels = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "expert", label: "Expert" },
];

const CourseFilter = () => {
    return (
        <section style={{ display: 'flex'}}>
            <Combobox items={timeZones} placeholder="Select Time Zone" />
            <Combobox items={courseTypes} placeholder="Select Course Type" />
            <Combobox items={experienceLevels} placeholder="Select Tutor Experience Level" />
        </section>
    );
}

export default CourseFilter;
