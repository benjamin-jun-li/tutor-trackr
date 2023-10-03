import { FC, ReactNode } from "react"
interface tutorLayoutProps {
    children: ReactNode
}
const TutorLayout: FC<tutorLayoutProps> = ({ children }) => {
    return (<main>
        { children }
    </main>)
}

export default TutorLayout