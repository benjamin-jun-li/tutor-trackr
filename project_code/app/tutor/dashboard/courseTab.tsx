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

const CourseTab:FC<{role:string}> = ({role}) => {
    return (
        <Tabs defaultValue="my course" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="my course">My Courses</TabsTrigger>
                <TabsTrigger value="all course">All Courses</TabsTrigger>
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
