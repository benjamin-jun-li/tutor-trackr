import { FC, ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className='bg-slate-200 p-10 pt-24 rounded-md flex justify-center items-center'>{children}</main>
  )
}

export default AuthLayout