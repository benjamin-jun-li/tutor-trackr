"use client"
import Combobox from "@/components/ui/combo-box";
import React, { useState, useEffect } from 'react';
import { Filters } from './filters'; 

const timeZones = [
    { value: "utc", label: "UTC" },
    { value: "est", label: "Eastern Standard Time" },
];

const courseTypes = [
    { value: "web development", label: "Web Development" },
    { value: "data science", label: "Data Science" },
];

const experienceLevels = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "expert", label: "Expert" },
];

interface CourseFilterProps {
  onFilterChange: (filters: Filters) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({ onFilterChange }) => {
    const [timeZone, setTimeZone] = useState<string | null>(null);
    const [courseType, setCourseType] = useState<string | null>(null);
    const [experienceLevel, setExperienceLevel] = useState<string | null>(null);

    useEffect(() => {
        onFilterChange({
            timeZone,
            courseType,
            experienceLevel
        });
    }, [timeZone, courseType, experienceLevel]); // Only call onFilterChange when any of the filters change

    return (
        <section style={{ display: 'flex'}}>
            <Combobox
                items={timeZones}
                placeholder="Select Time Zone"
                onChange={(selectedValue) => { setTimeZone(selectedValue); }}
            />
            <Combobox
                items={courseTypes}
                placeholder="Select Course Type"
                onChange={(selectedValue) => { setCourseType(selectedValue); }}
            />
            <Combobox
                items={experienceLevels}
                placeholder="Select Tutor Experience Level"
                onChange={(selectedValue) => { setExperienceLevel(selectedValue); }}
            />
        </section>
    );
}


export default CourseFilter;

