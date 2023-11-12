"use client"
import {useParams} from "next/navigation";
import {SocketIndicator} from "@/components/chat/socketIndicator";
import ChatMessages from "@/components/chat/chatMessages";
import ChatInput from "@/components/chat/chatInput";

const StudentChat = () => {
    const params = useParams();
    return (
        <main className="mt-[5rem] mb-3 flex flex-col justify-between min-h-[80vh] mx-4 p-6 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <section className="gap-2">
                <SocketIndicator />
                <ChatMessages className="mx-1 bg-white"
                              apiUrl={"/api/messages"}
                              socketUrl={"/api/socket/messages"}
                              conversationId={params?.conversationID}
                />
            </section>
            <ChatInput className="mx-1 mt-10"
                       apiUrl={"/api/socket/messages"}
                       query={{
                           conversationId: params?.conversationID
                       }}
            />
        </main>
    )
}

export default StudentChat
