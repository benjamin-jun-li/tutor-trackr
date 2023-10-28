import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const messages = [
    {
        id: 1,
        title: "Message Title 1",
        content: "Message Content 1",
    },
    {
        id: 2,
        title: "Message Title 2",
        content: "Message Content 2",
    },
].reverse();

const MessageBox = () => {
    return (
        <section>
            <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Message Board
            </h3>
            <ScrollArea className="h-72 min-w-[14rem] rounded-md border">
                <div className="p-4">
                    {messages.map((message, index) => (
                        <Link href={`/tutor/message/${message.id}`} key={index}>
                            <div>
                                <div className="text-sm cursor-pointer">
                                    <div className="font-semibold">{message.title}</div>
                                    <div>{message.content}</div>
                                </div>
                                {index !== messages.length - 1 && <Separator className="my-2" />}
                            </div>
                        </Link>
                    ))}
                </div>
            </ScrollArea>
        </section>
    );
};

export default MessageBox;
