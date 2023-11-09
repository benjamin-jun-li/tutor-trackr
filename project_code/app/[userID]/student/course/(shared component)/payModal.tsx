"use client"
import { FC, useState } from "react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogFooter,
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
import DatePicker from "@/app/[userID]/student/course/(shared component)/datePicker";
import {useToast} from "@/components/ui/use-toast";

interface PayModalProps {

}

const PayModal:FC<PayModalProps> = ({}) => {
    const {getters, setters} = useContextValue();
    const params = useParams();
    const { toast } = useToast();
    const [selectedTutor, setTutor] = useState("Select a tutor");
    const [availTime, setAvailTime] = useState("Select an available time");
    const [msg, setMsg] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const tutorsByCourse = useQuery(GET_TUTORS_BY_COURSE, { variables: { id : params?.id }});
    const [bookAppointment, {loading:loadingAppo, error: errorAppo, dataAppo}] = useMutation(ADD_APPOINTMENT);
    const [payCourse, {loading: loadingPay, error: errorPay, data: dataPay}] = useMutation(PAY_THE_COURSE);

    const submitAppointment = async () => {
        const courseName = tutorsByCourse?.data?.course?.name;
        const tutorName = selectedTutor;
        const studentName = getters.userName;
        const studentEmail = getters.userEmail;
        let tutorEmail = "";
        tutorsByCourse.data?.course?.tutors.forEach((tutor: any) => {
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
                endTime: "",
                appointmentDate: selectedDate
            }
        })
        const payResponse = await payCourse({
            variables: {
                studentId: getters.userID,
                courseId: params?.id,
            }
        })
        toast({
            title: "Appointment submitted",
            description: "Friday, February 10, 2023 at 5:57 PM",
        })
    }
    console.log(tutorsByCourse?.data?.course?.tutors)
    return (
        <AlertDialog>
            <AlertDialogTrigger data-popover-target="popover-default" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                Make Appointment
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-bold">Initiate an Appointment</AlertDialogTitle>
                </AlertDialogHeader>
                <div className="gap-2 flex flex-col">
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
                    <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate}/>
                    <Select onValueChange={setAvailTime}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an available time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Available Time</SelectLabel>
                                {tutorsByCourse?.data?.course?.tutors?.map((tutor : any) => (
                                    <SelectItem key={tutor.id} value={tutor.name}>{tutor.name}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <p className="text-md font-medium">Leave a short message to your tutor</p>
                    <Textarea className=""
                              onChange={(e)=>{setMsg(e.target.value)}}
                    />
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={submitAppointment}>Proceed</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PayModal