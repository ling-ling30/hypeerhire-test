import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
};

export default function Divider({ className }: Props) {
  return <div className={cn('w-full h-[1px] bg-gray-100', className)} />;
}
