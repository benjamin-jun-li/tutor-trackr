'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { buttonVariants } from './ui/button';
import { HandMetal } from 'lucide-react';
import { UserNav } from '@/components/dashboard/user-nav';
import { useQuery } from '@apollo/client';
// import { GET_USER } from '@/graphql/queries';

const Navbar = () => {
  const [userEmail, setUserEmail] = useState('');
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email: userEmail },
  });

  useEffect(() => {
    setUserEmail(localStorage.getItem('userEmail') ?? '');
  }, []);

  const userName = data?.user?.name || '';

  const pathname = usePathname();

  const isAdminPage =
      pathname?.includes('/siteadmin/') ?? pathname?.includes('/tutoradmin/');
  const isTutorPage = pathname?.startsWith('/tutor/');
  const isStudentPage = pathname?.startsWith('/student/');

  const renderContent = () => {
    if (isAdminPage || isTutorPage || isStudentPage) {
      return <UserNav userName={userName} userEmail={userEmail} />;
    } else {
      return
    }
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
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">TutorTrackr</h2>
        </section>
        <section className="navbar-end">{renderContent()}</section>
      </aside>
  );
};

export default Navbar;
