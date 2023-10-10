import SignInForm from "@/components/form/SignInForm"

const page = () => {
  return (
    <section className="max-w-[18rem] mt-4">
        <SignInForm />
        <p className="mt-4 text-center">
            <a href="/reset-password" className="text-blue-500 hover:underline">Forget your password?</a>
        </p>
    </section>
  )
}

export default page
