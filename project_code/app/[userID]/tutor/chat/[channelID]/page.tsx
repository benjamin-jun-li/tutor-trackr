"use client"
import ChatComponent from "@/components/chatComponent";
import { useParams } from "next/navigation";
import {SocketIndicator} from "@/components/socketIndicator";
const TutorChat = () => {
    const params = useParams();
    return (
        <main className="mt-[5rem]">
            <SocketIndicator />
            <ChatComponent channelID={params?.channelID}/>
        </main>
    )
}
export default TutorChat;