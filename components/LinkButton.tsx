import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function LinkButton({ className, children, href }: Props) {
  return (
    <Link href={href}>
      <button type="button" className={cn('', className)}>
        {children}
      </button>
    </Link>
  );
}
