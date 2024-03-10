'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

// for protected routes, authenticated access
export default function AuthLayout({ children }) {

  // session is linked to <SessionProvider> located in ./src/app/StoreProvider.jsx
  const session = useSession();
  console.log(session)


  const router = useRouter();
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     setIsAuthenticated(true);
  //   } else if (status === 'unauthenticated') {
  //     router.push('/login');
  //   }
  // }, [ status, router ]);

  return
}
