import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
const MessageBox = () => {
    return (
        <section>
            <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Message Board
            </h3>
            <ScrollArea className="h-72 min-w-[14rem] rounded-md border">
                <div className="p-4">
                    {tags.map((tag) => (
                        <>
                            <div key={tag} className="text-sm cursor-pointer">
                                {tag}
                            </div>
                            <Separator className="my-2" />
                        </>
                    ))}
                </div>
            </ScrollArea>
        </section>
    )
}

export default MessageBox