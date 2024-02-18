'use client';

import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import './globals.css';

export default function HomePage() {
  const user = useSelector((state) => state.session.user);
  if (!user) {
    redirect('/login');
  };

  return (
    <main className="page relative justify-center items-center bg-grey-400">
      <div className='flex justify-between gap-x-16 gap-y-16 w-auto'>
        <TiltCard />
        <FlashCard front={'Front'} back={'Back'} />
      </div>
    </main>
  );
};
