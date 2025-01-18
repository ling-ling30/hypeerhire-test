import Image, { StaticImageData } from 'next/image';
import React from 'react';
import nationalFlag from '@/public/national-flag.png';
import employeePhoto from '@/public/employee-photo.png';
import { cn } from '@/lib/utils';
type Props = {
  className?: string;
  background?: boolean;
  id: number;
  name: string;
  image: StaticImageData;
  nationality: StaticImageData;
  experience: number;
  description: string[];
};

export default function EmployeeCard({
  className,
  name,
  experience,
  description,
}: Props) {
  return (
    <div
      className={cn(
        'xl:p-7 p-6  h-[408px] w-[292px] bg-white rounded-xl text-base font-black shadow-xl flex flex-col text-[#5E626F] items-center justify-center tracking-tighter',
        className
      )}
    >
      <figure className="relative size-[120px] aspect-square bg-transparent flex items-center justify-center mb-4">
        <Image
          src={employeePhoto}
          alt="employee image"
          className={cn('rounded-full')}
        />
        <Image
          src={nationalFlag}
          alt="national flag"
          width={24}
          height={24}
          className="absolute bottom-0.5 right-2"
        />
      </figure>
      <div className="text-center">
        <h2 className=" text-2xl text-black">{name}</h2>
        <p className="text-[#4A77FF]">마케팅 · {experience}y+</p>
      </div>
      <div className="mt-9 inline-flex gap-0.5 gap-y-1  items-center justify-center flex-wrap">
        {description.map((item, index) => (
          <p
            key={index}
            className="text-md border-[1px] border-[#C1C5CF] rounded-md px-2.5 py-1"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
