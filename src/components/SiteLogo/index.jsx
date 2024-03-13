'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@app/globals.css';

// Image needs height and width to be set, or fill set to true

function SiteLogo({
  height,
  width,
  fill
}) {
  return (
    <Link href='/' className="flex items-center justify-center h-full box-border min-w-logo mx-2">
      <Image
        priority
        height={height}
        width={width}
        fill={fill}
        src={`/logo.png`}
        alt='Home'></Image>
    </Link>
  )
};

export default SiteLogo;
