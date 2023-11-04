"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useState} from "react";
import {useMutation} from "@apollo/client";

const TutorApplyModal = () => {
    const startTime = 8;
    const endTime = 21;
    const timeArray: number[] = Array.from({ length: endTime - startTime + 1 }, (_, index) => startTime + index);
    const [startAvail, setStartAvail] = useState("start time");
    const [endAvail, setEndAvail] = useState("end time");
    //TODO useMutation to send application

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button type="button" className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Apply as a Tutor
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Application</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-row justify-evenly items-center gap-2">
                        <span>From</span>
                        <Select onValueChange={setStartAvail}>
                            <SelectTrigger>
                                <SelectValue placeholder="start time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Start time</SelectLabel>
                                    {timeArray.map((time) => (
                                        <SelectItem key={time} value={`${time.toString()}:00`}>{time}:00</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <span>To</span>
                        <Select onValueChange={setEndAvail}>
                            <SelectTrigger>
                                <SelectValue placeholder="end time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>End time</SelectLabel>
                                    {timeArray.map((time) => (
                                        <SelectItem key={time} value={`${time.toString()}:00`}>{time}:00</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Label htmlFor="reason" className="pl-1">
                        Explain the reasons to apply this role
                    </Label>
                    <Textarea id="reason" className="" placeholder="Type your message here." />
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default TutorApplyModal;
