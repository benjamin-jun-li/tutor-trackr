"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import DashboardComponent from "@/components/dashboard/DashboardComponent";
import {FC} from "react";
import Link from "next/link";

const CourseTab:FC<{role:string}> = ({role}) => {
    return (
        <Tabs defaultValue="my course" className="w-full">
            <TabsList className="grid w-full grid-cols-2 pb-[3rem]">
                <TabsTrigger className="text-2xl font-bold" value="my course">My Courses</TabsTrigger>
                <TabsTrigger className="text-2xl font-bold" value="all course">All Courses</TabsTrigger>
            </TabsList>
            <TabsContent value="my course">
                <Card>
                    <DashboardComponent role={role}/>
                </Card>
            </TabsContent>
            <TabsContent value="all course">
                <Card>
                    <DashboardComponent role={role}/>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default CourseTab
