"use client"
import ChatComponent from "@/components/chatComponent";
import { useParams } from "next/navigation";

const TutorChat = () => {
    const params = useParams();
    return (
        <main className="mt-[5rem]">
            <ChatComponent channelID={params?.channelID}/>
        </main>
    )
}
export default TutorChat;