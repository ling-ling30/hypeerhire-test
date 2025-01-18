import { cn } from '@/lib/utils';
import * as React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ className, children }: Props) {
  return (
    <button
      type="button"
      className={cn(
        'bg-white h-9 text-[#4A77FF] rounded-[8px] font-bold px-6 py-1.5',
        className
      )}
    >
      {children}
    </button>
  );
}
