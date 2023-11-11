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

import {Auth_SiteAdmin, Auth_Student, Auth_Tutor, Auth_TutorAdmin, GET_USERTYPE} from "@/graphql/queries";
import {useLazyQuery, useQuery} from "@apollo/client";
import { useContextValue } from  "@/components/context"


const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
  // identity: z.enum(["student", "tutor",""]),
});

const SignInForm = () => {
    const router = useRouter();
    const { getters, setters } = useContextValue();
    const [authStudent, { loading: loadingStudent, error: stuError, data: dataStudent }] = useLazyQuery(Auth_Student);
    const [authTutor, { loading: loadingTutor, error: tutError,  data: dataTutor }] = useLazyQuery(Auth_Tutor);
    const [authSiteAdmin, { loading: loadingAdminSite, error: adminSiteError, data: dataAdminSite }] = useLazyQuery(Auth_SiteAdmin);
    const [authTutorAdmin, { loading: loadingAdminTut, error: adminTutError, data: dataAdminTut }] = useLazyQuery(Auth_TutorAdmin);


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
            // identity: ""
        },
    });

    const { getValues } = form;
    const values = getValues();
    const enteredPassword = values.password;
    const [getIdentity, { loading: loadingIdentity, error: identityError, data: dataIdentity }] = useLazyQuery(GET_USERTYPE);
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const res = await getIdentity({
            variables: {
                email: values.email
            }
        });
      let userIdentity = res.data?.getUserType?.userType
        setters.setIdentity(userIdentity);
      if (userIdentity === "Student") {
          const res2 = await authStudent({variables: {email: values.email}})
          if (res2.data?.student?.password === enteredPassword) {
              const userId = res2.data?.student?.id
              setters.setEmail(values.email)
              setters.setName(res2.data.student.name)
              setters.setUserID(userId)
              setters.setUserStatus(true)
              router.replace(`/${userId}/student/dashboard`)
          } else {
              alert("invalid student info")
          }
      } else if (userIdentity === "Tutor") {
          const res2 = await authTutor({variables: {email: values.email}});
          if (res2.data?.tutor?.password === enteredPassword) {
              const userId = res2.data?.tutor?.id
              setters.setEmail(values.email)
              setters.setName(res2.data.tutor.name)
              setters.setUserID(userId)
              setters.setUserStatus(true)
              router.replace(`/${userId}/tutor/dashboard`)
          } else {
              alert("Invalid tutor info")
          }
      } else if (userIdentity === "SiteAdmin") {
          const res2 = await authSiteAdmin({ variables: { email: values.email } });
          if (res2.data?.siteAdmin?.password === enteredPassword) {
              const userId = res2.data?.siteAdmin?.id
              setters.setUserStatus(true);
              router.replace(`/${userId}/admin/siteadmin/dashboard`);
          } else {
              alert("Invalid site admin info");
          }
      } else if (userIdentity === "TutorAdmin") {
            const res2 = await authTutorAdmin({ variables: { email: values.email } });
            if (res2.data?.tutorAdmin?.password === enteredPassword) {
                const userId = res2.data?.tutorAdmin?.id
                setters.setUserStatus(true);
                router.replace(`/${userId}/admin/tutoradmin/dashboard`);
            } else {
                alert("Invalid tutor admin info");
            }
      }
      if (loadingIdentity || loadingStudent || loadingTutor || loadingAdminSite || loadingAdminTut || getters.userStatus) {
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
