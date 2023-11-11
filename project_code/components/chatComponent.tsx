import {FC, useEffect, useState} from "react";
import { useQuery } from "@apollo/client";
import type { Socket } from 'socket.io-client';
import NewChat from "@/app/[userID]/student/chat/[channelID]/newChat";

interface chatComponentProps {
    channelID: string | string[] | undefined,

}
const ChatComponent:FC<chatComponentProps> = ({ channelID }) => {
    return (
        <section>
            <NewChat />
        </section>
    )
}

export default ChatComponent