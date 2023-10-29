"use client"
import { useState, MouseEvent } from "react";
import { Find_User } from "@/graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useContextValue } from "@/components/context";

const ForgetPasswordPage = () => {
    const {getters, setters} = useContextValue();
    const router = useRouter();
    const code = "951XF";
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Choose your role")
    const [verifyCode, setVerifyCode ] = useState("")
    const [getUserAccount, { loading: loading, error: error, data: data }] = useLazyQuery(Find_User);

    const handleSubmit = async () => {
        const res_user = await getUserAccount({variables: {email: email}})
        if (res_user?.data?.status === 1) {
            const res = await fetch("api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    verifyCode: code,
                })
            })
            if (res.status === 200) {
                console.log(email);
                setters.setEmail(email);
                console.log(getters.userEmail);
                setEmail("");
                console.log(res)
            } else {
                alert(res);
            }
        }
    }
    const openModal = () => {
        const myModal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
        handleSubmit().then();
        if (myModal && email !== "" && role !== "Choose your role") {
            myModal.showModal();
        } else {
            alert("Info needed!")
        }
    }
    const verifyUser = (e:MouseEvent) => {
        e.preventDefault();
        // check user code correctness
        if (code === verifyCode) {
            router.push("/reset/");
        } else {
            alert("verification code doesn't match");
        }
    }
  return (
    <main className="max-w-[18rem] mt-4">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <p className="mb-4">Please enter your email address to receive a link to reset your password:</p>
        <form>
            <label htmlFor="account-email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                   placeholder="Enter your email" id="account-email"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />
            <label htmlFor="user-role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your account role</label>
            <select defaultValue={role} onChange={(e) => {setRole(e.target.value)}} id="user-role" className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Choose your role</option>
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
                <option value="site-admin">Site administrator</option>
                <option value="tutor-admin">Tutor administrator</option>
            </select>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button onClick={()=>{openModal()}} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Send Reset Link
            </button>
        </form>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-neutral-200">
                <form method="dialog" className="flex flex-row justify-between mt-2">
                    <div className="flex flex-col justify-between">
                        <h3 className="font-bold text-lg">Enter your verification code</h3>
                        <h3 className="text-sm">Password reset link has been sent to {email}</h3>
                    </div>
                    {/* if there is a button in form, it will close the modal */}
                    <button>❌</button>
                </form>

                <label htmlFor="verification-code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <input onChange={(e) => {setVerifyCode(e.target.value)}} type="text" id="verification-code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <button onClick={verifyUser} className="btn hover:bg-gray-500 w-full mt-2">Verify</button>
            </div>
        </dialog>
    </main>
  )
}
export default ForgetPasswordPage
