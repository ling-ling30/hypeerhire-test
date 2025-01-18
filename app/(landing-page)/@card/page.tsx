import { StaticImageData } from 'next/image';
import React from 'react';
import Carousel from './components/Carousel';

const CheckBox = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" rx="6" fill="#E8ECFF" />
      <path
        d="M14.6666 6.5L8.24992 12.9167L5.33325 10"
        stroke="#2C599B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

async function getSampleData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sample`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function page() {
  const data: {
    message: string;
    items: {
      id: number;
      name: string;
      image: StaticImageData;
      nationality: StaticImageData;
      experience: number;
      description: string[];
    }[];
  } = await getSampleData();

  return (
    <div className="">
      {/* Tooltips */}
      <Carousel slides={data.items} />
      <section className="flex xl:hidden w-[350px] text-base text-white px-1 gap-x-3 gap-y-2 flex-wrap tracking-tighter font-black">
        <div className="flex items-center w-[125px]">
          <figure className="px-3">
            <CheckBox />
          </figure>
          <p className="tracking-tighter">한국어 능력</p>
        </div>
        <div className="flex items-center ">
          <figure className="px-3">
            <CheckBox />
          </figure>
          <p>업무 수행 능력</p>
        </div>
        <div className="flex items-center  w-[125px]">
          <figure className="px-3">
            <CheckBox />
          </figure>
          <p>겸업 여부</p>
        </div>
        <div className="flex items-center">
          <figure className="px-3">
            <CheckBox />
          </figure>
          <p>평판 조회</p>
        </div>
      </section>
      <p className="block xl:hidden mt-6 text-lg underline font-black mb-[60px] px-4  text-[#FBFF23]">
        개발자가 필요하신가요?
      </p>
    </div>
  );
}
