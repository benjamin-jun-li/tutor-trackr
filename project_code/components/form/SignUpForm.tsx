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
import Link from "next/link";
import GoogleSignInBtn from "../GoogleSignInBtn";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ADD_USER } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";

const FormSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .max(20, "Username must be less than 20 characters"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
    identity: z.enum(["student", "tutor", "admin"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const SignUpForm = () => {
  const [addUser] = useMutation(ADD_USER);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      identity: "student",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    addUser({
      variables: {
        name: values.username,
        email: values.email,
        password: values.password,
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="haydensmith" {...field} />
                </FormControl>
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
                    placeholder="mail@example.com"
                    type="email"
                    {...field}
                  />
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
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter your Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Re-Enter your Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="identity"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Your Identity</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex justify-between"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="student" />
                      </FormControl>
                      <FormLabel className="font-normal">Student</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="tutor" />
                      </FormControl>
                      <FormLabel className="font-normal">Tutor</FormLabel>
                    </FormItem>
                    {/*<FormItem className="flex items-center space-x-3 space-y-0">*/}
                    {/*    <FormControl>*/}
                    {/*    <RadioGroupItem value="admin" />*/}
                    {/*    </FormControl>*/}
                    {/*    <FormLabel className="font-normal">Admin</FormLabel>*/}
                    {/*</FormItem>*/}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="w-full mt-6" type="submit">
          Sign up
        </Button>
      </form>
      <div
        className="mx-auto my-4 flex w-full items-center justify-evenly 
            before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 
            after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400"
      >
        or
      </div>
      <GoogleSignInBtn>Sign up with Google</GoogleSignInBtn>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-in">
          Sign in
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
