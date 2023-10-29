"use client"
import { useState, useEffect, MouseEvent } from "react";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useContextValue } from "@/components/context";
import { Find_User } from "@/graphql/queries";

const ForgetPasswordPage = () => {
    const {getters, setters} = useContextValue();
    const router = useRouter();
    const code = "951XF";
    const [email, setEmail] = useState("");
    const [verifyCode, setVerifyCode ] = useState("")
    const [findUser] = useLazyQuery(Find_User)

    useEffect(() => {
        setters.setEmail(email);
    }, [email, setters])
    const openModal = async () => {
        const res_user = await findUser({variables: {email: email}});
        if (res_user?.data?.finduser.status === true) {
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
                const myModal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
                if (myModal && email !== "") {
                    myModal.showModal();
                } else {
                    alert("Info needed!")
                }
            } else {
                alert(res);
            }
        } else {
            alert("account not found");
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
