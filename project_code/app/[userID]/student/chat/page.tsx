import ChatList from "@/components/chatList";

const StudentChatList = () => {
    return (
        <main className="mt-[5rem]">
            <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                Talk to your tutors
            </h1>
            <ChatList role={"student"}/>
        </main>
    )
}

export default StudentChatList