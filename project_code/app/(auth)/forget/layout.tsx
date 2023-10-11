import { FC, ReactNode } from 'react'

interface ForgetLayoutProps {
    children: ReactNode
}

const ForgetLayout: FC<ForgetLayoutProps> = ({ children }) => {
    return (
        <main className='min-h-screen bg-slate-200 p-10 pt-24 rounded-md flex flex-col justify-center items-center'>
            {children}
        </main>
    )
}

export default ForgetLayout