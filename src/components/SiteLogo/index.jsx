'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@app/globals.css';

// Image needs height and width to be set, or fill set to true

function SiteLogo() {
  return (
    <Link href='/' className="flex items-center justify-center h-full box-border w-logo">
      <Image
        priority
        height={60}
        width={120}
        src={`/logo.png`}
        alt='Home'></Image>
    </Link>
  )
};

export default SiteLogo;
