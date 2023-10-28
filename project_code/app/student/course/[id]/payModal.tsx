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
    return (
        <AlertDialog>
            <AlertDialogTrigger data-popover-target="popover-default" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                Make Appointment
            </AlertDialogTrigger>
            <button data-popover-target="popover-default" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default popover</button>
            <div data-popover="" id="popover-default" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div className="px-3 py-2">
                    <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow=""></div>
            </div>
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
                        <em className="mt-4 text-md">Leave a short message to your tutor</em>
                        <Textarea className="mt-1"
                                  onChange={(e)=>{setMsg(e.target.value)}}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Proceed</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PayModal