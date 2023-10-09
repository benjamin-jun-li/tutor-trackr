'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { HandMetal } from 'lucide-react';
import { UserNav } from '@/components/dashboard/user-nav';
import { useQuery } from '@apollo/client';
import { useContextValue } from  "@/components/context"
// import { GET_USER } from '@/graphql/queries';

const Navbar = () => {

  const { getters } = useContextValue();
  const [userEmail, setUserEmail] = useState('');


  useEffect(() => {
    setUserEmail(localStorage.getItem('userEmail') ?? '');
  }, []);

  const userName = '';

  const pathname = usePathname();

  const isAdminPage =
      pathname?.includes('/siteadmin/') ?? pathname?.includes('/tutoradmin/');
  const isTutorPage = pathname?.startsWith('/tutor/');
  const isStudentPage = pathname?.startsWith('/student/');

  const renderContent = () => {
    if (isAdminPage || isTutorPage || isStudentPage) {
      return <UserNav userName={userName} userEmail={userEmail} />;
    }
    return <></>
  };

  const handleLogoLink = (url: string) => {
    return <Link href={url}><HandMetal className="h-8 w-8 text-primary-500" /></Link>;
  };

  const handleLogo = () => {
    if (isAdminPage) return handleLogoLink('/admin/dashboard');
    if (isTutorPage) return handleLogoLink('/tutor/dashboard');
    if (isStudentPage) return handleLogoLink('/student/dashboard');
    return handleLogoLink('/');
  };

  return (
      <aside className="navbar bg-base-100 fixed w-full z-10 top-0">
        <section className="navbar-start">
          <div>{handleLogo()}</div>
        </section>
        <section className="navbar-center">
          <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">TutorTrackr</h2>
        </section>
        <section className="navbar-end">{renderContent()}</section>
      </aside>
  );
};

export default Navbar;
