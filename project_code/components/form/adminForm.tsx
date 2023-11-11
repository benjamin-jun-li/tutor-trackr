"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useContextValue } from "@/components/providers/context";
import { useRouter } from "next/navigation";

import { Auth_SiteAdmin, Auth_TutorAdmin } from "@/graphql/queries";
import { useLazyQuery } from "@apollo/client";

const FormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
    role: z.enum(["siteadmin", "tutoradmin", ""]),
});

const AdminForm = () => {
    const router = useRouter();
    const { getters, setters } = useContextValue();

    const [authSiteAdmin, { loading: loadingAdminSite, error: adminSiteError, data: dataAdminSite }] = useLazyQuery(Auth_SiteAdmin);
    const [authTutorAdmin, { loading: loadingAdminTut, error: adminTutError, data: dataAdminTut }] = useLazyQuery(Auth_TutorAdmin);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
            role: "",
        },
    });

    const { getValues } = form;
    const values = getValues();
    const enteredPassword = values.password;

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        setters.setIdentity(values.role);
        if (values.role === "siteadmin") {
            const res = await authSiteAdmin({ variables: { email: values.email } });
            if (res.data?.siteAdmin?.password === enteredPassword) {
                setters.setUserStatus(true);
                router.replace('/admin/siteadmin/dashboard');
            } else {
                alert("Invalid site admin info");
            }
        } else if (values.role === "tutoradmin") {
            const res = await authTutorAdmin({ variables: { email: values.email } });
            if (res.data?.tutorAdmin?.password === enteredPassword) {
                setters.setUserStatus(true);
                router.replace('/admin/tutoradmin/dashboard');
            } else {
                alert("Invalid tutor admin info");
            }
        }
        if (loadingAdminTut || loadingAdminSite || getters.userStatus) {
            return <span className="loading loading-bars loading-lg"></span>;
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="mail@example.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Your Role</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex justify-evenly border-solid border-2 border-sky-600 p-2 rounded-full"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="siteadmin" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Site Administrator</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="tutoradmin" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Tutor Administrator</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="w-full mt-6" type="submit">
                    Login
                </Button>
            </form>
        </Form>
    );
};

export default AdminForm;
