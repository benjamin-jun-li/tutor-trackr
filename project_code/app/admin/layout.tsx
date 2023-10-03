import { FC, ReactNode } from "react"
interface adminLayoutProps {
    children: ReactNode
}
const AdminLayout: FC<adminLayoutProps> = ({ children }) => {
    return (<main className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
        { children }
    </main>)
}

export default AdminLayout