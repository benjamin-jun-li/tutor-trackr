'use client'

import React from 'react';
import { useContextValue } from  "@/components/context"
import { GET_COURSES } from "@/graphql/queries";
import {useQuery} from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Course_type} from "@/app/student/dashboard/page";

type FormData = {
    courses: string[];
    reason: string;
};

const formSchema = z.object({
    courses: z.array(z.string()),
    reason: z.string(),
});

const TutorInterviewPage: React.FC = () => {
    const { getters,setters } = useContextValue();
    console.log(getters.userEmail, getters.userName);
    const userEmail = 'hayden@tutor.com'
    const userName = 'Hayden'

    const { data, loading, error } = useQuery(GET_COURSES);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courses: [],  // Set default value to an empty array
            reason: ''
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    return (
        <div className="mt-10 p-4 bg-white shadow-md rounded-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="courses"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Courses</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline">
                                            {field.value?.length > 0 ? `${field.value?.length} courses selected` : "Select courses"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[240px] p-4">
                                        {data && data.course.map((course: Course_type) => (
                                            <div key={course.id} className="flex items-center space-x-2">
                                                <Checkbox
                                                    checked={Array.isArray(field.value) && field.value?.includes(course.name)}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            field.onChange([...(Array.isArray(field.value) ? field.value : []), course.name]);
                                                        } else {
                                                            field.onChange((Array.isArray(field.value) ? field.value : []).filter(item => item !== course.name));
                                                        }
                                                    }}
                                                />

                                                <span>{course.name}</span>
                                            </div>
                                        ))}
                                    </PopoverContent>
                                </Popover>
                                <FormDescription className="mt-2 text-sm text-gray-500">
                                    Select the courses you are interested in.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="mb-2">Reason</FormLabel>
                                <FormControl>
                                    <Input placeholder="Describe your reason" {...field} className="border p-2 rounded h-32"/>
                                </FormControl>
                                <FormDescription className="mt-2 text-sm text-gray-500">
                                    Describe why you are interested in these courses.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default TutorInterviewPage;
