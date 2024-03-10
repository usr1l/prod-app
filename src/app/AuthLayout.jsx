'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function AuthLayout({ children }) {
  const { data: session, status } = useSession();
  console.log(session)

  // const router = useRouter();
  // const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     setIsAuthenticated(true);
  //   } else if (status === 'unauthenticated') {
  //     router.push('/login');
  //   }
  // }, [ status, router ]);

  // if (isAuthenticated) {
  //   return <>{children}</>;
  // }

}
