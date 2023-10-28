import PayModal from "@/app/student/course/[id]/payModal";
const InteractBoxStudent = () => {
    return (
        <section className="col-span-1">
            <div className="w-full mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h4 className="text-2xl font-bold tracking-tight">PRICE</h4>
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
                <PayModal />
            </div>
        </section>
    )
}

export default InteractBoxStudent