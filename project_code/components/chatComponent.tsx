import {FC, useEffect, useState} from "react";
import { useQuery } from "@apollo/client";
import type { Socket } from 'socket.io-client';

interface chatComponentProps {
    channelID: string | string[] | undefined,

}
const ChatComponent:FC<chatComponentProps> = ({ channelID }) => {

    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState<string>("");

    return (
        <section>

        </section>
    )
}

export default ChatComponent