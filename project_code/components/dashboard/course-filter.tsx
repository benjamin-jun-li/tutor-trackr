"use client"
import Combobox from "@/components/ui/combo-box";
import React, { useState, useEffect } from 'react';
import { Filters } from './filters';
import { useQuery } from "@apollo/client";
import { GET_COURSES } from "@/graphql/queries";

// These arrays will hold objects with value and label properties
const timeZones: { value: string; label: string; }[] = [];
const courseTypes: { value: string; label: string; }[] = [];
const experienceLevels: { value: string; label: string; }[] = [];

interface CourseFilterProps {
    onFilterChange: (filters: Filters) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({ onFilterChange }) => {
    const [timeZone, setTimeZone] = useState<string | null>(null);
    const [courseType, setCourseType] = useState<string | null>(null);
    const [experienceLevel, setExperienceLevel] = useState<string | null>(null);
    const { data, loading } = useQuery(GET_COURSES, {
        fetchPolicy: 'network-only',
    });

    useEffect(() => {
        if (data?.courses) {
            data.courses.forEach((course: any) => {
                if (course.tags && course.tags.length >= 3) {
                    const timeZoneObject = { value: course.tags[0], label: course.tags[0] };
                    const courseTypeObject = { value: course.tags[1], label: course.tags[1] };
                    const experienceLevelObject = { value: course.tags[2], label: course.tags[2] };

                    if (!timeZones.some(tz => tz.value === timeZoneObject.value)) {
                        timeZones.push(timeZoneObject);
                    }
                    if (!courseTypes.some(ct => ct.value === courseTypeObject.value)) {
                        courseTypes.push(courseTypeObject);
                    }
                    if (!experienceLevels.some(el => el.value === experienceLevelObject.value)) {
                        experienceLevels.push(experienceLevelObject);
                    }
                }
            });
            onFilterChange({
                timeZone,
                courseType,
                experienceLevel
            });
        }
    }, [data?.courses]); // Run this effect when data.courses changes

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

