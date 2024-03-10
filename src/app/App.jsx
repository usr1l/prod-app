'use client';

import React, { useEffect, useState } from 'react'
import Navigation, { BottomNav } from '@components/Navigation';
import Page from '@components/Page';
import { useDispatch, useSelector } from 'react-redux';
import { thunkAuthenticate } from '@lib/store';
import AuthLayout from './AuthLayout';

function App({ children }) {
  const dispatch = useDispatch();
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    dispatch(thunkAuthenticate())
      .then(() => setIsLoaded(true));
  }, [ dispatch ]);

  const user = useSelector(state => state.session.user);

  return (
    <>
      <Navigation />
      {isLoaded && (
        <AuthLayout>
          <Page >
            {children}
            <BottomNav />
          </Page>
        </AuthLayout>
      )}
    </>
  )
};

export default App;
