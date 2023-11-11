import ChatList from "@/components/chat/chatList";

const TutorChatList = () => {
    return (
        <main className="mt-[5rem]">
            <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                View the inquiries from students
            </h1>
            <ChatList role={"tutor"}/>
        </main>
    )
}

export default TutorChatList;