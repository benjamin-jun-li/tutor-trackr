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

const courseCounts = [
    { value: "1-10", label: "1-10 courses" },
    { value: "11-50", label: "11-50 courses" },
];

const tutorRates = [
    { value: "10-20", label: "$10-$20/hr" },
    { value: "21-50", label: "$21-$50/hr" },
];

const CourseFilter = () => {
    return (
        <section style={{ display: 'flex'}}>
            <Combobox items={timeZones} placeholder="Select Time Zone" />
            <Combobox items={courseTypes} placeholder="Select Course Type" />
            <Combobox items={experienceLevels} placeholder="Select Tutor Experience Level" />
            <Combobox items={courseCounts} placeholder="Select Tutor Course Count" />
            <Combobox items={tutorRates} placeholder="Select Tutor Rate" />
        </section>
    );
}

export default CourseFilter;
