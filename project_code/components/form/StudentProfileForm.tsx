"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
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
import {useQuery} from "@apollo/client";
import {GET_USER} from "@/graphql/queries";

const profileFormSchema = z.object({
    avatar: z
        .string().
        url({
            message: "Please enter a valid avatar."
        }),
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
    // TODO
    timezone: z.string().min(1).max(255),
    bio: z.string().max(160).min(1),
    balance: z.number().min(0),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function StudentProfileForm() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        mode: "onChange",
    })

    function onSubmit(data: ProfileFormValues) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }


    const [userEmail, setUserEmail] = useState('')

    useEffect(() => {
        let emailValue;
        emailValue = localStorage.getItem('userEmail') || '';
        setUserEmail(emailValue)
    }, []);

    const { loading, error, data } = useQuery(GET_USER, {
        variables: { email: userEmail },
    });

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
                                <Avatar>
                                    <AvatarImage src="/default-user.png" alt="avatar" />
                                    <AvatarFallback>Avatar</AvatarFallback>
                                </Avatar>
                            </FormControl>
                            <input type="file" accept="image/*" className="file-input w-full max-w-xs" />
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
                                <Input placeholder={data && data.user?.name} {...field} />
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
                                <Input placeholder={data && data.user?.email} {...field} />
                            </FormControl>
                            <FormDescription>
                                You can change your email.
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
                                <Input placeholder={data && data.user?.phone} {...field} />
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
                                <div className="select-wrapper">
                                    {/*TODO: TimezoneSelect*/}
                                    <Input type="text" />
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
                                    placeholder={data && data.user?.bio}
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
                <FormField
                    control={form.control}
                    name="balance"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Balance</FormLabel>
                            <FormControl>
                                {data && data.user?.balance}
                            </FormControl>
                            <FormDescription>
                                This is your account balance.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Update profile</Button>
            </form>
        </Form>
    )
}