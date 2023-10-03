import { FC, ReactNode } from "react"
interface adminLayoutProps {
    children: ReactNode
}
const AdminLayout: FC<adminLayoutProps> = ({ children }) => {
    return (<main className='bg-slate-200 p-10 pt-24 rounded-md flex justify-center items-center'>
        { children }
    </main>)
}

export default AdminLayout