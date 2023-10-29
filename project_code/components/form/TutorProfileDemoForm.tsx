"use client"

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TUTOR_PROFILE } from "@/graphql/queries";
import { useRouter } from "next/navigation";
import { useContextValue } from "@/components/context";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function TutorProfileDisplay() {
    const { getters } = useContextValue();
    const router = useRouter();
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        setUserEmail(getters.userEmail);
    }, [getters.userEmail]);

    const { loading, error, data } = useQuery(GET_TUTOR_PROFILE, {
        variables: { email: userEmail },
        fetchPolicy: 'network-only'
    });

    const handleUpdateClick = () => {
        router.push('/tutor/profile/update');
    };

    const handleDashboardClick = () => {
        router.push('/tutor/dashboard');
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg space-y-6">
            <div className="flex justify-center">
                <Avatar className="w-24 h-24">
                    <AvatarImage src={data?.getTutorProfile?.avatar || "/default-user.png"} alt="avatar" />
                    <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
            </div>
            <div className="text-xl font-semibold text-center mb-4">Tutor Profile Details</div>
            <div className="text-gray-700">Username: {data?.getTutorProfile?.username}</div>
            <div className="text-gray-700">Email: {data?.getTutorProfile?.email}</div>
            <div className="text-gray-700">Phone: {data?.getTutorProfile?.phone}</div>
            <div className="text-gray-700">Address: {data?.getTutorProfile?.address}</div>
            <div className="text-gray-700">Time Zone: {data?.getTutorProfile?.timeZone}</div>
            <div className="text-gray-700">Professional Bio: {data?.getTutorProfile?.professionalBio}</div>
            <div className="text-gray-700">Experience Summary: {data?.getTutorProfile?.experienceSummary}</div>
            <div className="text-gray-700">Course Can Teach: {data?.getTutorProfile?.courseCanTeach}</div>
            <div className="text-gray-700">Balance: {data?.getTutorProfile?.accountBalance}</div>
            <div className="flex justify-center space-x-4 mt-6">
                <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleUpdateClick}>Update</Button>
                <Button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={handleDashboardClick}>Back</Button>
            </div>
        </div>
    );
}
