'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

// for protected routes, authenticated access
export default function AuthLayout({ children }) {

  // session is linked to <SessionProvider> located in ./src/app/StoreProvider.jsx
  // has data, status, and update
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    };
  }, [ status, router ]);

  return (
    <>
      {children}
    </>
  )
}
