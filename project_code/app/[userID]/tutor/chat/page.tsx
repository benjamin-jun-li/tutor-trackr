import ChatList from "@/components/chatList";

const TutorChatList = () => {
    return (
        <main className="mt-[5rem]">
            <h1>View the inquiries from students</h1>
            <ChatList role={"tutor"}/>
        </main>
    )
}

export default TutorChatList;