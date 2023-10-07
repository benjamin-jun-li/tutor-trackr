import { FC, ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className='min-h-screen bg-slate-200 p-10 pt-24 rounded-md flex flex-col justify-center items-center'>
        <h1 className="text-3xl">Welcome! Learn anything on your schedule</h1>
        {children}
    </main>
  )
}

export default AuthLayout