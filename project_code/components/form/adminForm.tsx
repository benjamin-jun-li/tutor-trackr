"use client"
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"
import { Auth_SiteAdmin, Auth_TutorAdmin } from "@/graphql/queries";
import { useLazyQuery } from "@apollo/client";

const AdminForm = () => {
    const [role, setRole] = useState("Select Your Role")
    const handleRole = (e: ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    }

    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    )
    const formSubmit = (e:FormEvent) => {
        e.preventDefault();
        //TODO add admin login
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    return (
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Admin Panel</h1>
            <form className="space-y-4" onSubmit={formSubmit}>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email Address"
                           className="w-full input input-bordered" onChange={handleInput}/>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" onChange={handleInput}
                           className="w-full input input-bordered" />
                </div>
                <select className="select select-info w-full label-text"
                        value={role} onChange={handleRole}>
                    <option disabled>Select Your Role</option>
                    <option>Site Administrator</option>
                    <option>Tutor Administrator</option>
                </select>
                <button className="btn btn-block">Login</button>
            </form>
        </div>
    )
}
export default AdminForm