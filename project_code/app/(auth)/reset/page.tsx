"use client"
import {useState} from "react";

const ResetPage = () => {
    const [password, setPassword] = useState<string | undefined>();
    const [rePassword, setRePassword] = useState<string | undefined>();

    if (password === rePassword) {
    //TODO USEmUTATION
    } else {
    //TODO Alert diff
    }

    return (
        <main>
            <h1 className="text-2xl font-bold mb-4">Reset Account Password</h1>
            <form>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input required type="password" onChange={(e) => { setPassword(e.target.value)}}
                       placeholder="Enter your password" id="password"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                />
                <label htmlFor="re-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-enter Password</label>
                <input required type="password" onChange={(e) => { setRePassword(e.target.value)}}
                       placeholder="Enter your password again" id="re-password"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                />
                <button type="submit" className="p-2 w-full bg-blue-500 text-white rounded">
                    Reset Password
                </button>
            </form>
        </main>
    )
}

export default ResetPage