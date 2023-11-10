import ChatList from "@/components/chatList";

const StudentChatList = () => {
    return (
        <main className="mt-[5rem]">
            <h1>Talk to your tutors</h1>
            <ChatList role={"student"}/>
        </main>
    )
}

export default StudentChatList