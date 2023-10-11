"use client"
import { useState, FormEvent } from "react";
import { Auth_Student, Auth_Tutor, Auth_TutorAdmin, Auth_SiteAdmin } from "@/graphql/queries";
import { useLazyQuery } from "@apollo/client";
const ForgetPasswordPage = () => {
    const [authStudent, { loading: loadingStudent, error: stuError, data: dataStudent }] = useLazyQuery(Auth_Student);
    const [authTutor, { loading: loadingTutor, error: tutError,  data: dataTutor }] = useLazyQuery(Auth_Tutor);
    const [authSiteAdmin, { loading: loadingAdminSite, error: adminSiteError, data: dataAdminSite }] = useLazyQuery(Auth_SiteAdmin);
    const [authTutorAdmin, { loading: loadingAdminTut, error: adminTutError,  data: dataAdminTut}] = useLazyQuery(Auth_TutorAdmin);

    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Choose your role")
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        switch (role) {
            case "tutor":
                console.log("Performing actions for a tutor.");
                // Add tutor-specific logic here
                break;
            case "student":
                console.log("Performing actions for a student.");
                // Add student-specific logic here
                break;
            case "site-admin":
                console.log("Performing actions for a site admin.");
                // Add site-admin-specific logic here
                break;
            case "tutor-admin":
                console.log("Performing actions for a tutor admin.");
                // Add tutor-admin-specific logic here
                break;
            default:
                alert("Unknown role. No specific actions defined.");
                break;
        }
    const res = await fetch("api/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
        })
    })
    if (res.status === 200) {
        setEmail("");
    } else {
        alert(res);
    }
  }
  const openModal = () => {
      const myModal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
      if (myModal) {
          myModal.showModal();
      } else {
          console.log("Element with ID 'my_modal_1' not found.");
      }
  }

  return (
    <main className="max-w-[18rem] mt-4">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <p className="mb-4">Please enter your email address to receive a link to reset your password:</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="account-email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                   placeholder="Enter your email" id="account-email"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            />
            <label htmlFor="user-role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your account role</label>
            <select defaultValue={role} onChange={(e) => {setRole(e.target.value)}} id="user-role" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Choose your role</option>
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
                <option value="site-admin">Site-admin</option>
                <option value="tutor-admin">Tutor-admin</option>
            </select>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button onClick={()=>{openModal()}} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
              Send Reset Link
            </button>
        </form>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Enter your verification code</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </main>
  )
}

export default ForgetPasswordPage
