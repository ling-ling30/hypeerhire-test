import React from 'react';

import hyperhireLogo from '@/public/hyperhire.svg';
import Image from 'next/image';

export default function HyperhireLogo() {
  return (
    <Image
      priority
      src={hyperhireLogo}
      alt="hyperhire logo"
      width={114}
      height={21}
      className="pl-[1.5px]"
    />
  );
}
