'use client'

import React from 'react';
import { useParams } from "next/navigation";

const MessagePage = () => {
    const params = useParams();

    return (
        <main className="mt-20">
            <h1 className="text-2xl">
                Message Page
            </h1>
            <p>Message: {params?.id}</p>
        </main>

    );
};

export default MessagePage;
