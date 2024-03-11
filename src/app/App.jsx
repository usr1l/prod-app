'use client';

import React from 'react'
import Navigation, { BottomNav } from '@components/Navigation';
import Page from '@components/Page';
import AuthLayout from './AuthLayout';
import { SessionProvider } from 'next-auth/react';

function App({ children }) {
  return (
    <SessionProvider>
      <Navigation />
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
