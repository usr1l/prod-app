'use client';

import React from 'react'
import Navigation, { BottomNav } from '@components/Navigation';
import Page from '@components/Page';
import AuthLayout from './AuthLayout';
import { SessionProvider, getSession } from 'next-auth/react';
import { useSelector } from 'react-redux';

function App({ children }) {
  const { user } = useSelector(state => state.session);
  // if (typeof window !== 'undefined') {
  //   window.addEventListener('resize', () => {
  //     // We execute the same script as before
  //     let vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   });
  // };
  const session = getSession();
  // console.log("session", session);
  return (
    <SessionProvider>
      <Navigation sessionUser={user} />
      <AuthLayout>
        <Page >
          {children}
          <BottomNav />
        </Page>
      </AuthLayout>
    </SessionProvider>
  )
};

export default App;
