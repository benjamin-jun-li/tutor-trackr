"use client"
import { FC, useState } from "react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { GET_TUTORS_BY_COURSE } from "@/graphql/queries";
import {useMutation, useQuery} from "@apollo/client";
import { useParams } from "next/navigation";
import {REGISTER_COURSE_FOR_STUDENT, PAY_THE_COURSE, ADD_APPOINTMENT } from "@/graphql/mutations";
import { useContextValue } from "@/components/context";

interface PayModalProps {

}

const PayModal:FC<PayModalProps> = ({}) => {
    const {getters, setters} = useContextValue();
    const params = useParams();
    const [selectedTutor, setTutor] = useState("Select a tutor");
    const [msg, setMsg] = useState("");
    const tutorsByCourse = useQuery(GET_TUTORS_BY_COURSE, { variables: { id : params?.id }});
    const [bookAppointment, {loading:loadingAppo, error: errorAppo, dataAppo}] = useMutation(ADD_APPOINTMENT);
    const [payCourse, {loading: loadingPay, error: errorPay, data: dataPay}] = useMutation(PAY_THE_COURSE);

    const submitAppointment = async () => {
        const courseName = tutorsByCourse?.data?.course?.name;
        const tutorName = selectedTutor;
        const studentName = getters.userName;
        const studentEmail = getters.userEmail;
        let tutorEmail = "";
        tutorsByCourse.data?.course?.tutors.forEach((tutor) => {
            if (tutor.name === tutorName) {
                tutorEmail = tutor.email;
            }
        })
        const appointmentResponse = await bookAppointment({
            variables:{
                courseName,
                tutorName,
                tutorEmail,
                studentName,
                studentEmail,
                startTime: "",
                endTime: ""
            }
        })
        const payResponse = await payCourse({
            variables: {
                studentId: "653e03b1b3198c69406bf165",
                courseId: params?.id,
            }
        })
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger data-popover-target="popover-default" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                Make Appointment
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Initiate an Appointment</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Select onValueChange={setTutor}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a tutor" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Tutors</SelectLabel>
                                    {tutorsByCourse?.data?.course?.tutors?.map((tutor : any) => (
                                        <SelectItem key={tutor.id} value={tutor.name}>{tutor.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <em className="text-md">Leave a short message to your tutor</em>
                        <Textarea className="mt-1"
                                  onChange={(e)=>{setMsg(e.target.value)}}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={submitAppointment}>Proceed</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PayModal