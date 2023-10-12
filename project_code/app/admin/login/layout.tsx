import { FC, ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className='min-h-screen bg-slate-200 p-10 pt-24 rounded-md flex flex-col justify-center items-center'>
        <article>
            <h1 className="text-3xl text-center">Admin Login</h1>
        </article>
        {children}
    </main>
  )
}

export default AuthLayout