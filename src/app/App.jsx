'use client';

import React from 'react'
import Navigation, { BottomNav } from '@components/Navigation';
import Page from '@components/Page';

function App({ children }) {
  return (
    <>
      <Navigation />
      <Page >
        {children}
        <BottomNav />
      </Page>
    </>
  )
};

export default App;
