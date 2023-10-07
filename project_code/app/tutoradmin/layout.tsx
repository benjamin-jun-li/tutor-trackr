import { FC, ReactNode } from "react"
interface adminLayoutProps {
    children: ReactNode
}
const TutorAdminLayout: FC<adminLayoutProps> = ({ children }) => {
    return (
        <main className="min-h-screen overflow-hidden rounded-[0.5rem] border bg-background shadow">
        { children }
        </main>
    )
}

export default TutorAdminLayout