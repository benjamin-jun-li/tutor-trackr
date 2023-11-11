"use client"

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_STUDENT_PROFILE } from "@/graphql/queries";
import {useParams, useRouter} from "next/navigation";
import { useContextValue } from "@/components/providers/context";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function StudentProfileDisplay() {
    const router = useRouter();
    const params = useParams();

    const profileUserID = (params?.otherID) ? params?.otherID : params?.userID;

    const { loading, error, data } = useQuery(GET_STUDENT_PROFILE, {
        variables: { id: profileUserID },
        fetchPolicy: 'network-only'
    });

    console.log(data?.getStudentProfile?.thumbnail)

    const handleUpdateClick = () => {
        router.push(`/${params?.userID}/student/profile/update`);
    };

    const handleDashboardClick = () => {
        params?.otherID ? router.push(`/${params?.userID}/tutor/dashboard`) :
            router.push(`/${params?.userID}/student/dashboard`);
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg space-y-6">
            <div className="flex justify-center">
                <Avatar className="w-24 h-24">
                    <AvatarImage src={data?.getStudentProfile?.thumbnail || "/default-user.png"} alt="avatar" />
                    <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
            </div>
            <div className="text-xl font-semibold text-center mb-4">Profile Details</div>
            <div className="text-gray-700">Username: {data?.getStudentProfile?.username}</div>
            <div className="text-gray-700">Email: {data?.getStudentProfile?.email}</div>
            <div className="text-gray-700">Phone: {data?.getStudentProfile?.phone}</div>
            <div className="text-gray-700">Address: {data?.getStudentProfile?.address}</div>
            <div className="text-gray-700">Time Zone: {data?.getStudentProfile?.timeZone}</div>
            <div className="text-gray-700">Bio: {data?.getStudentProfile?.biography}</div>
            <div className="flex justify-center space-x-4 mt-6">
                {(!params?.otherID) ?
                    <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleUpdateClick}>Update</Button> : null}
                <Button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={handleDashboardClick}>Back</Button>
            </div>
        </div>
    );
}
