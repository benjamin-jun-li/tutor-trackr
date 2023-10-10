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
import { useRouter } from "next/navigation";

import { Auth_Student, Auth_Tutor } from "@/graphql/queries";
import { useLazyQuery } from "@apollo/client";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import { useContextValue } from  "@/components/context"
import {useEffect, useState} from "react";


const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
  identity: z.enum(["student", "tutor",""]),
});

const SignInForm = () => {
    const router = useRouter();
    const { getters, setters } = useContextValue();

    const [authStudent, { loading: loadingStudent, error: stuError, data: dataStudent }] = useLazyQuery(Auth_Student);
    const [authTutor, { loading: loadingTutor, error: tutError,  data: dataTutor }] = useLazyQuery(Auth_Tutor);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
            identity: ""
        },
    });

    const { getValues } = form;
    const values = getValues();
    const enteredPassword = values.password;

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
      setters.setIdentity(values.identity);
      if (values.identity === "student") {
          const res = await authStudent({variables: {email: values.email}})
          if (res.data?.student?.password === enteredPassword) {
              setters.setEmail(values.email)
              setters.setName(res.data.student.name)
              setters.setUserStatus(true)
              router.replace('/student/dashboard')
          } else {
              alert("invalid student info")
          }
      } else if (values.identity === "tutor") {
          const res = await authTutor({variables: {email: values.email}});
          if (res.data?.tutor?.password === enteredPassword) {
              setters.setEmail(values.email)
              setters.setName(res.data.student.name)
              setters.setUserStatus(true)
              router.replace('/tutor/dashboard')
          } else {
              alert("Invalid tutor info")
          }
      }
      if (loadingStudent || loadingTutor || getters.userStatus) {
          return <span className="loading loading-bars loading-lg"></span>
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
          </div>

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
                                className="flex justify-evenly border-solid border-2 border-sky-600 p-2 rounded-full"
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
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

          <Button className="w-full mt-6" type="submit">
            Sign in
          </Button>
        </form>
        <div
          className="mx-auto my-4 flex w-full items-center justify-evenly
            before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400
            after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400"
        >
          or
        </div>
        <GoogleSignInBtn>Sign in with Google</GoogleSignInBtn>
        <p className="text-center text-sm text-gray-600 mt-2">
          If you don&apos;t have an account, please&nbsp;
          <Link className="text-blue-500 hover:underline" href="/register">
            Sign up
          </Link>
        </p>
      </Form>
  );
};

export default SignInForm;
