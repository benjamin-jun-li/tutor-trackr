'use client'

import React from 'react';
import { useContextValue } from "@/components/context"
import { GET_COURSES } from "@/graphql/queries";
import { ADD_Application } from "@/graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";
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
import { useRouter } from "next/navigation";
import TimezonePicker from "@/components/TimezonePicker";
import Link from "next/link";

type FormData = {
    courses: string;
    description: string;
    price: string; // Changed from string to number
    thumbnail: string; // New field for thumbnail URL
    timeZone: string;
    courseType: string;
    experienceLevel: string;
};

const formSchema = z.object({
    courses: z.string().min(1).max(100),
    description: z.string().min(1).max(1000),
    price: z.string().min(1).max(100), // Changed from string to number and added validation
    thumbnail: z.string().url("Invalid url"), // New validation for thumbnail URL
    timeZone: z.string().min(1).max(255),
    courseType: z.string().optional(),
    experienceLevel: z.string().optional(),
});

const NewCourseForm: React.FC = () => {
    const { getters } = useContextValue();
    const userEmail = getters.userEmail;
    const router = useRouter();
    const userName = getters.userName;

    const { data, loading, error } = useQuery(GET_COURSES);
    const [addApplication, { data: tutorData, loading: tutorLoading, error: tutorError }] = useMutation(ADD_Application);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courses: "",
            description: '',
            price: '', // Default value for price as number
            thumbnail: '', // Default value for thumbnail
            timeZone: 'UTC+10:00 Australian Eastern Standard Time',
            courseType: '',
            experienceLevel: '',
        },
    });

    const onSubmit = async (formData: FormData) => {
        const tags = [formData.timeZone, formData.courseType, formData.experienceLevel].filter(tag => tag);

        console.log(formData);

        // const res = await addApplication({
        //     variables: {
        //         name: userName,
        //         email: userEmail,
        //         courseName: formData.courses,
        //         description: formData.description,
        //         price: formData.price,
        //         thumbnail: formData.thumbnail, // Pass thumbnail URL
        //         tags: tags,
        //     },
        // });
        //
        // if (res.data?.addInterview?.email) {
        //     alert("Application added successfully");
        //     router.replace(`/tutor/dashboard/`)
        // } else {
        //     console.log(res);
        // }
    };

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
                                <FormLabel className="mb-2 text-lg">Courses</FormLabel>
                                <FormControl>
                                    <Input {...field} className="border rounded" />
                                </FormControl>
                                <FormDescription className="mt-2 text-sm text-gray-500">
                                    Enter the course you are interested in.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="thumbnail"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="mb-2 text-lg">Thumbnail URL</FormLabel>
                                <FormControl>
                                    <Input {...field} className="border rounded" />
                                </FormControl>
                                <FormDescription className="mt-2 text-sm text-gray-500">
                                    Enter the URL of the course thumbnail image.
                                </FormDescription>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="mb-2 text-lg">Description</FormLabel>
                                <FormControl>
                                    <Input {...field} className="border p-2 rounded h-32"/>
                                </FormControl>
                                <FormDescription className="mt-2 text-sm text-gray-500">
                                    Describe the course details
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="mb-2 text-lg">Price</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} className="border rounded"/>
                                </FormControl>
                                <FormDescription className="mt-2 text-sm text-gray-500">
                                    Describe the course details
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="timeZone"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="mb-2 text-lg">Time Zone</FormLabel>
                                    <FormControl>
                                        <div className="select-wrapper" {...field}>
                                            <TimezonePicker />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="courseType"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="mb-2 text-lg">Course Type</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="border rounded" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="experienceLevel"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="mb-2 text-lg">Experience Level</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="border rounded" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Submit</Button>
                        <Link href="/tutor/dashboard">
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Back</Button>
                        </Link>
                    </div>

                </form>
            </Form>
        </div>
    );
};

export default NewCourseForm;
