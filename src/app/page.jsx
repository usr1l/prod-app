'use client';

import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import { useEffect, useLayoutEffect } from 'react';
import { getServerSession } from 'next-auth';
import './globals.css';
import { authenticate, thunkAuthenticate, thunkTest } from '@lib/store/session';
import { withAuthComponent } from '@util/sessionStatus';
import AuthLayout from './AuthLayout';

function HomePage() {
  const dispatch = useDispatch();

  return (
    <main className="page relative justify-center items-center bg-grey-400">
      <div className='flex justify-between gap-x-16 gap-y-16 w-auto'>
        {/* <TiltCard /> */}
        {/* <FlashCard front={'Front'} back={'Back'} /> */}
      </div>
    </main>
  );
};

// export default withAuthComponent(HomePage);
export default HomePage;
