"use client"
import {useParams} from "next/navigation";
import {SocketIndicator} from "@/components/chat/socketIndicator";
import NewChat from "@/components/chat/newChat";
import ChatInput from "@/components/chat/chatInput";

const StudentChat = () => {
    const params = useParams();
    return (
        <main className="mt-[5rem] mb-3 flex flex-col justify-between min-h-[80vh] mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <section className="gap-2">
                <SocketIndicator />
                <NewChat className="mx-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"/>
            </section>
            <ChatInput className="mx-1 mt-10"
                       apiUrl={"/api/socket/messages"}
                       query={{
                           channelId: params?.channelID
                       }}
            />
        </main>
    )
}

export default StudentChat
