import { Metadata } from "next";
import DashboardComponent from "@/components/dashboard/DashboardComponent";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student interface",
}

export interface Course_type {
  id:   string,
  name: string,
  description: string,
  comments: string[],
  thumbnail: string,
  tags: string[],
}

export default function DashboardPage() {
    return (
        <section className="mt-[5rem]">
          <DashboardComponent role={"student"}/>
        </section>
    );
}