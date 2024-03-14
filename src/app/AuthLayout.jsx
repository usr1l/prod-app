'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';

// for protected routes, authenticated access
export default function AuthLayout({ children }) {
  // const { isAuthenticated, user } = useSelector(state => state.session);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push('/login');
  //   }
  // }, [ isAuthenticated, router ]);

  // session is linked to <SessionProvider> located in ./src/app/StoreProvider.jsx
  // has data, status, and update
  // auto fetches from /api/auth/session in the backend
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [ status, router ]);

  return (
    <>
      {children}
    </>
  )
}
