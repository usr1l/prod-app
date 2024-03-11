'use client';

import React, { useEffect, useState } from 'react'
import Navigation, { BottomNav } from '@components/Navigation';
import Page from '@components/Page';
import { useDispatch, useSelector } from 'react-redux';
import { thunkAuthenticate } from '@lib/store';
import AuthLayout from './AuthLayout';
import { SessionProvider } from 'next-auth/react';

function App({ children }) {

  const dispatch = useDispatch();
  const [ isLoaded, setIsLoaded ] = useState(false);

  const session = useSelector(state => state.session);
  console.log(session)
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
