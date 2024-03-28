'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react'
import Navigation, { BottomNav } from '@components/Navigation';
import Page from '@components/Page';
import { useSelector } from 'react-redux';

function App({ children }) {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const loaded = useSelector(state => state.session.isLoaded);

  useLayoutEffect(() => {
    if (loaded) setIsLoaded(true);
    else setIsLoaded(false);
  }, [ loaded ]);

  const { user } = useSelector(state => state.session);

  return (
    <>
      {isLoaded && (
        <>
          <Navigation sessionUser={user} />
          <Page >
            {children}
            <BottomNav />
          </Page>
        </>
      )}
    </>
  )
};

export default App;
