'use client'

import React from 'react';
import { useContextValue } from  "@/components/context"
import { GET_COURSES } from "@/graphql/queries";
import {ADD_Application} from "@/graphql/mutations";
import {useMutation, useQuery} from "@apollo/client";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {Course_type} from "@/app/student/dashboard/page";
import {useRouter} from "next/navigation";
import Link from "next/link";

type FormData = {
    courses: string;
    coverLetter: string;
};

const formSchema = z.object({
    courses: z.string(),
    coverLetter: z.string(),
});


const TutorInterviewPage: React.FC = () => {
    const { getters,setters } = useContextValue();
    console.log(getters.userEmail, getters.userName);
    const userEmail = getters.userEmail;
    const router = useRouter();
    const userName = getters.userName;

    const { data, loading, error } = useQuery(GET_COURSES);
    const [addApplication,{data:tutorData,loading:tutorLoading,error:tutorError}] = useMutation(ADD_Application);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courses: "",
            coverLetter: ''
        },
    });

    const onSubmit = async (data: FormData) => {

        const res = await addApplication({
            variables: {
                name: userName,
                email: userEmail,
                courseName: data.courses,
                description: data.coverLetter
            },
        });
        if (res.data?.addInterview?.email) {
            alert("Interview added successfully");
            router.replace(`/tutor/dashboard/`)
        }
        else {
            console.log(res);
        }
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
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-2"
                                >
                                    {data?.courses?.map((course: Course_type) => (
                                        <FormItem key={course.id} className="flex items-center space-x-3">
                                            <FormControl>
                                                <RadioGroupItem value={course.name} />
                                            </FormControl>
                                            <FormLabel className="font-normal">{course.name}</FormLabel>
                                        </FormItem>
                                    ))}
                                </RadioGroup>
                                <FormDescription className="mt-2 text-sm text-gray-500">
                                    Select the course you are interested in.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="coverLetter"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="mb-2">
                                    <h2 className="text-lg">
                                        Cover Letter
                                    </h2>
                                    <p className="text-gray-500 text-sm">
                                        Describe why you are interested in teaching this course
                                    </p>
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} className="border p-2 rounded h-32"/>
                                </FormControl>
                                <FormDescription className="mt-2 text-sm text-gray-500">
                                    Describe why you are interested in these courses.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-2">
                        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Submit</Button>
                        <Link href="/tutor/dashboard">
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Return</Button>
                        </Link>
                    </div>

                </form>
            </Form>
        </div>
    );
};

export default TutorInterviewPage;
