import { FC, ReactNode } from "react"
interface adminLayoutProps {
    children: ReactNode
}
const AdminLayout: FC<adminLayoutProps> = ({ children }) => {
    return (<main>
        { children }
    </main>)
}

export default AdminLayout