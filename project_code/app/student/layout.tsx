import { FC, ReactNode } from "react"
interface studentLayoutProps {
    children: ReactNode
}
const StudentLayout: FC<studentLayoutProps> = ({ children }) => {
    return (<main>
        { children }
    </main>)
}

export default StudentLayout