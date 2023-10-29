"use client";
import { GET_APPLICATION_BY_ID } from "@/graphql/queries";
import {useMutation, useQuery} from "@apollo/client";
import { useParams } from "next/navigation";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { Approval_Application } from "@/graphql/mutations";

const ApplicationPage = () => {
    const param = useParams();
    const application = useQuery(GET_APPLICATION_BY_ID, { variables: { id: param?.id } });
    const [acceptApplication, {data:studentData,loading:studentLoading,error:studentError}] = useMutation(Approval_Application);

    const appDetails = application.data?.getSingleApplication;

    if (!appDetails) {
        return <div>Loading...</div>;
    }

    const handleAcceptClick = async () => {
        await acceptApplication({
            variables: {
                id: application.data?.getSingleApplication?.id,
            },
        });
        console.log(acceptApplication)
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
                <div className="flex gap-2">
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded"
                        onClick={handleAcceptClick}
                    >
                        Accept
                    </Button>
                    <Button className="bg-red-500 hover:bg-red-600 text-white rounded">Reject</Button>
                    <Link href="/admin/tutoradmin/dashboard">
                        <Button className="bg-gray-500 hover:bg-blue-600 text-white rounded">Back</Button>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default ApplicationPage;
