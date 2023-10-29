"use client";
import { GET_APPLICATION_BY_ID } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const ApplicationPage = () => {
    const param = useParams();
    const application = useQuery(GET_APPLICATION_BY_ID, { variables: { id: param?.id } });

    const appDetails = application.data?.getSingleApplication;

    if (!appDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center">
            <main className="p-5 bg-white shadow-lg rounded-lg w-full max-w-2xl">
                <div className="mb-4">
                    <span className="font-semibold">Name:</span> {appDetails.name}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Email:</span> {appDetails.email}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Course Name:</span> {appDetails.courseName}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Description:</span> {appDetails.description}
                </div>
                {appDetails.interview && (
                    <div className="mb-4">
                        <span className="font-semibold">Interview:</span> {appDetails.interview}
                    </div>
                )}
                <Link href="/admin/tutoradmin/dashboard">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded">Back</Button>
                </Link>
            </main>
        </div>
    );
}

export default ApplicationPage;
