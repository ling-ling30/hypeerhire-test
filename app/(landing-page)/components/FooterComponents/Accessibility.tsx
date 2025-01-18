import Image from 'next/image';
import React from 'react';
import arrow from '@/public/footer/arrow.svg';
import iconCode from '@/public/footer/icon-code.svg';
import iconKor from '@/public/footer/icon-kor.svg';
import iconGear from '@/public/footer/icon-gear.svg';
import avatar from '@/public/footer/avatar.svg';

const list = [
  {
    label: '해외 개발자 원격 채용',
    icon: iconCode,
  },
  {
    label: '외국인 원격 채용 (비개발)',
    icon: avatar,
  },
  {
    label: '한국어 가능 외국인 채용',
    icon: iconKor,
  },
  {
    label: '해외 개발자 활용 서비스',
    icon: iconGear,
  },
];

export default function Accessibility() {
  return (
    <div className="flex xl:gap-x-[15px] gap-x-1 gap-y-2 flex-wrap">
      {list.map(item => (
        <div
          key={item.label}
          className="w-[160px] xl:w-[187px] h-[142] bg-white xl:p-4 p-2 rounded-lg"
        >
          <div>
            <Image
              src={item.icon}
              alt={item.label}
              width={40}
              height={40}
              className="rounded-lg"
            />
            <p className="mt-3 text-sm mb-4 tracking-tighter">{item.label}</p>
          </div>
          <div className="flex">
            <p className="text-[#5E626F] text-[13px] mr-1">바로가기</p>
            <Image src={arrow} alt="arrow" width={20} height={20} />
          </div>
        </div>
      ))}
    </div>
  );
}
