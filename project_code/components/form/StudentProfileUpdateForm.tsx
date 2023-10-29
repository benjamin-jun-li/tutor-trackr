"use client"

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
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import {useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_STUDENT_PROFILE} from "@/graphql/queries";
import {UPDATE_STUDENT_PROFILE} from "@/graphql/mutations";
import {usePathname, useRouter} from "next/navigation";
import {useContextValue} from "@/components/context";
import TimezonePicker from "@/components/TimezonePicker";

const profileFormSchema = z.object({
    avatar: z.string().optional(),
    username: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        }),
    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),
    phone: z.string()
        .min(8)
        .max(15)
        .refine(value => /^\+?\d+(\s\d+)?$/.test(value), {
            message: "Invalid phone number format. (e.g. +1 1234567890)",
        }),
    address: z.string()
        .min(5)
        .max(255)
        .refine(value => /^[a-zA-Z0-9\s\-,]+$/u.test(value), {
            message: "Invalid address format.",
        }),
    timezone: z.string().min(1).max(255).default("UTC+10:00 Australian Eastern Standard Time"),
    bio: z.string().max(160).min(1),
    // balance: z.number().min(0),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function StudentProfileUpdateForm() {
    const { getters,setters } = useContextValue();
    const router = useRouter();
    let currentPath = usePathname();

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        mode: "onChange",
        defaultValues: {
            email: getters.userEmail
        }
    })

    const [updateStudentProfile,{data:studentData,loading:studentLoading,error:studentError}] = useMutation(UPDATE_STUDENT_PROFILE);

    currentPath =
        currentPath?.startsWith('/student') ? '/student' :
            currentPath?.startsWith('/tutor') ? '/tutor' :
                currentPath;


    const [userEmail, setUserEmail] = useState('')
    useEffect(() => {
        setUserEmail(getters.userEmail);
    }, [getters.userEmail]);


    const onSubmit = async (value: ProfileFormValues) => {
        const res = await updateStudentProfile({
            // Todo need to add the id of the user
            variables: {
                email: value.email,
                thumbnail: value.avatar,
                username: value.username,
                phone: value.phone,
                address: value.address,
                timeZone: value.timezone,
                biography: value.bio,
            }
        })
        if (res.data?.updateStudentProfile?.email) {
            setters.setEmail(value.email);
            setters.setName(value.username);
            alert("Profile updated successfully!")
            router.replace(`/student/profile/demo`)
        } else {
            console.log(res);
        }

        console.log("Form data submitted:", value);
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(value, null, 2)}</code>
        </pre>
            ),
        })
    }

    const handleDashboardClick = () => {
        router.push(currentPath + '/profile/demo');
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="avatar"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Avatar</FormLabel>
                            <FormControl>
                                <div>
                                    <Avatar>
                                        <AvatarImage src="/default-user.png" alt="avatar" />
                                        <AvatarFallback>Avatar</AvatarFallback>
                                    </Avatar>
                                    <Input id="avatar" type="file" accept="image/*" {...field} />
                                </div>
                            </FormControl>
                            <FormDescription>
                                This is your avatar. It can be uploaded as a type of image.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name. It can be your real name or a
                                pseudonym.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    disabled
                                    placeholder={getters.userEmail}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                You cannot have the access change your email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your phone number. It should all be numbers.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your address.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="timezone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Time Zone</FormLabel>
                            <FormControl>
                                <div className="select-wrapper" {...field}>
                                    <TimezonePicker />
                                </div>
                            </FormControl>
                            <FormDescription>
                                You can pick your timezone in your area.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                You can <span>@mention</span> other users and organizations to
                                link to them.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/*<div>*/}
                {/*    Balance: {data && data.user?.accountBalance ? data.user?.accountBalance : 0}*/}
                {/*</div>*/}

                <div className="flex space-x-4">
                    <Button type="submit">Update profile</Button>
                    <Button onClick={handleDashboardClick}>Back</Button>
                </div>

            </form>
        </Form>
    )
}