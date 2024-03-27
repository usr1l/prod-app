'use client';

import React from 'react'
import Navigation, { BottomNav } from '@components/Navigation';
import Page from '@components/Page';
import AuthLayout from './AuthLayout';
import { SessionProvider, getSession } from 'next-auth/react';
import { useSelector } from 'react-redux';

function App({ children }) {
  const { user } = useSelector(state => state.session);

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
