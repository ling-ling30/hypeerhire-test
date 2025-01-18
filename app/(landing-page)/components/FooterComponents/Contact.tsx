import Image from 'next/image';
import React from 'react';
import hyperhire from '@/public/footer/hyperhire.svg';

export default function Contact() {
  return (
    <div className="w-[247px]">
      <Image
        src={hyperhire}
        alt="hyperhire logo"
        width={187}
        height={34}
        className="mb-4"
      />
      <p className=" mb-[18px] text-[13px]">
        우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
      </p>
      <p className="text-[#5E626F] text-sm mb-2">010-0000-0000</p>
      <p className="text-[#5E626F] text-sm">aaaaa@naver.com</p>
    </div>
  );
}
