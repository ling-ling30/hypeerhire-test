'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import EmployeeCard from './EmployeeCard';
import caretRight from '@/public/caret-right.svg';
import caretLeft from '@/public/caret-left.svg';
import { FadeIn } from '@/components/FadeIn';
import dollarSign from '@/public/dollar-sign.svg';
import triangle from '@/public/triangle.svg';

type Props = {
  slides: {
    id: number;
    name: string;
    image: StaticImageData;
    nationality: StaticImageData;
    experience: number;
    description: string[];
  }[];
};

export default function Carousel({ slides }: Props) {
  const totalLength = slides.length - 1;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <section className="inline-flex relative xl:pt-0 xl:mt-28 mt-16 -translate-x-[255px] ">
      <FadeIn className="absolute top-0 left-1/2 -translate-x-1/2 xl:-translate-y-[75px] -translate-y-[28px] ">
        <div className="bg-[#E9F7EF]  p-4 text-center flex w-[152px] h-[43px] items-center justify-center rounded-lg">
          <Image
            priority
            src={dollarSign}
            alt="dollar sign"
            width={26}
            height={26}
            className="mr-1"
          />
          <p className="text-lg font-black text-[#00C696]">월 100만원</p>
        </div>
        <Image
          className="absolute -bottom-2 left-1/2 -translate-x-1/2"
          priority
          src={triangle}
          alt="triangle"
          width={12}
          height={11}
        />
      </FadeIn>
      <section></section>
      <FadeIn>
        <button
          type="button"
          title="Previous"
          onClick={() => {
            if (currentIndex === 0) {
              setCurrentIndex(totalLength);
            } else {
              setCurrentIndex(currentIndex - 1);
            }
          }}
          className="absolute bottom-1/2 translate-y-1/2 xl:left-[125px] left-64"
        >
          <figure className="size-8 flex items-center justify-center mr-[32px]">
            <Image src={caretLeft} alt="caret left" width={13} height={22} />
          </figure>
        </button>
      </FadeIn>
      <FadeIn>
        <EmployeeCard
          className="bg-[#EDFCFF] xl:scale-[0.89] xl:translate-x-[54%] translate-x-[85%] scale-[70%]"
          {...slides[currentIndex === 0 ? totalLength : currentIndex - 1]}
        />
      </FadeIn>
      <EmployeeCard
        {...slides[currentIndex]}
        className="z-10 scale-[80%] xl:scale-100"
      />

      <FadeIn>
        <EmployeeCard
          className="bg-[#EDFCFF] xl:scale-[0.89] xl:-translate-x-[54%] -translate-x-[85%] scale-[70%]"
          {...slides[currentIndex === totalLength ? 0 : currentIndex + 1]}
        />
      </FadeIn>
      <FadeIn>
        <button
          type="button"
          title="Next"
          onClick={() => {
            if (currentIndex === totalLength) {
              setCurrentIndex(0);
            } else {
              setCurrentIndex(currentIndex + 1);
            }
          }}
          className="absolute bottom-1/2 translate-y-1/2 xl:right-[125px] right-64"
        >
          <figure className="size-8 flex items-center justify-center ml-[32px]">
            <Image src={caretRight} alt="caret right" width={13} height={22} />
          </figure>
        </button>
      </FadeIn>
    </section>
  );
}
