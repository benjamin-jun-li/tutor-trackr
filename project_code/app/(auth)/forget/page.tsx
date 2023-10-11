"use client"
import { useState, FormEvent } from "react";
const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add logic to send reset password request
    alert('Password reset link has been sent to your email.');
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

  return (
    <section className="max-w-[18rem] mt-4">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <p className="mb-4">Please enter your e-mail address to receive a link to reset your password:</p>
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="mb-4 p-2 w-full border rounded" 
                required 
            />
            <button type="submit" className="p-2 w-full bg-blue-500 text-white rounded">
              Send reset link
            </button>
        </form>
    </section>
  )
}

export default ForgetPasswordPage
