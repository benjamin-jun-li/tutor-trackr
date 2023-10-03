import { FC, ReactNode } from "react"
interface tutorLayoutProps {
    children: ReactNode
}
const TutorLayout: FC<tutorLayoutProps> = ({ children }) => {
    return (<main className='bg-slate-200 p-10 pt-24 rounded-md flex justify-center items-center'>
        { children }
    </main>)
}

export default TutorLayout