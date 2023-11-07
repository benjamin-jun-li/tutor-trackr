"use client"
import { useEffect, useState } from "react";
import io from "socket.io-client";
import type { Socket } from 'socket.io-client';

let socket: undefined | Socket
const ChatComponent = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        socketInitializer();

        return () => {
            socket?.disconnect();
        };
    },[]);

    const socketInitializer = async () => {
        await fetch("/api/socket");

        socket = io();
        socket.on("receive-message", (data) => {
            setMessages((pre) => [...pre, data]);
        });
    }

    const sendMessage = () => {
        if (socket !== undefined) {
            socket.emit("send-message", message);
            setMessage("");
        } else {
            console.log("error with socket");
        }
    };

    return (
        <section>
            <h1>Chat</h1>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                className="bg-neutral-100"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </section>
    )
}

export default ChatComponent