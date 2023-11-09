"use client"
import PayModal from "@/app/[userID]/student/course/(shared component)/payModal";
import { usePathname } from "next/navigation";

const InteractBoxStudent = () => {
    const pathname = usePathname();
    return (
        <section className="col-span-1">
            <div className="w-full mt-[4rem] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h4 className="text-2xl font-bold tracking-tight flex justify-center">A$50</h4>
                <ul className="my-4 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>
                        Choose tutors according to your own schedule
                    </li>
                    <li>
                        Personalised ONE-to-ONE Session
                    </li>
                    <li>
                        Pay as you go
                    </li>
                </ul>
                {/*<button type="button" className="w-full text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">*/}
                {/*    Subscribe*/}
                {/*</button>*/}
                <PayModal />
            </div>
            { pathname?.includes("my") && (
                <div className="w-full mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    view my current appointment
                </div>
            )}
        </section>
    )
}

export default InteractBoxStudent