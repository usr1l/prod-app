'use client';

import React from 'react';
import AuthProtect from '@AuthProtect';
import './globals.css';

function HomePage() {
  return (
    <main className="page relative justify-center items-center bg-grey-400">
      <div className='flex justify-between gap-x-16 gap-y-16 w-auto'>
      </div>
    </main>
  );
};

export default AuthProtect(HomePage);
