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

interface PayModalProps {

}

const PayModal:FC<PayModalProps> = ({}) => {
    const [tutor, setTutor] = useState("Select a tutor");
    const [msg, setMsg] = useState("")
    //TODO useMutation to send appointment to backend

    const submitAppointment = () => {
        console.log("hihi")
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
                                    <SelectItem value="apple">Apple</SelectItem>
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