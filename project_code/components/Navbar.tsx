'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { buttonVariants } from './ui/button'
import { HandMetal } from 'lucide-react'
import { UserNav } from "@/components/dashboard/user-nav"
import { useQuery } from "@apollo/client"
import { GET_USER } from "@/graphql/queries"

const Navbar = () => {
  const userEmail: string = localStorage.getItem('userEmail')!;

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email: userEmail },
  });

  let userName = '';

  if (data) {
    userName = data.user.name;
  }

  const pathname = usePathname();

  let isAdminPage = false;
  let isTutorPage = false;
  let isStudentPage = false;

  if (pathname !== null) {
    // 判断当前页面是否属于管理员、导师或学生页面
    isAdminPage = pathname.startsWith('/admin/');
    isTutorPage = pathname.startsWith('/tutor/');
    isStudentPage = pathname.startsWith('/student/');
  }

  // 根据页面类型决定显示的内容
  const renderContent = () => {
    if (isAdminPage || isTutorPage || isStudentPage) {
      // 如果是管理员、导师或学生页面，则显示Avatar组件
      return <UserNav userName={userName} userEmail={userEmail} />;
    } else {
      // 否则显示默认的"Sign in"按钮
      return <Link className={buttonVariants()} href='/sign-in'>Sign in</Link>;
    }
  };

  return (
      <aside className="navbar bg-base-100 fixed w-full z-10 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link href='/'>
            <HandMetal className='h-8 w-8 text-primary-500'/>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          {renderContent()}
        </div>
      </aside>
  )
}

export default Navbar