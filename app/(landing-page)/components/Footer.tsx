import React from 'react';
import hyperhire from '@/public/footer/hyperhire.svg';
import iconCode from '@/public/footer/icon-code.svg';
import iconKor from '@/public/footer/icon-kor.svg';
import iconGear from '@/public/footer/icon-gear.svg';
import arrow from '@/public/footer/arrow.svg';
import avatar from '@/public/footer/avatar.svg';
import Image from 'next/image';

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

export default function Footer() {
  return (
    <footer className="xl:pt-20 pt-16 px-4 xl:pl-[346px] font-black bg-[#FBFBFB] text-[#343741] tracking-tighter">
      <section className="flex gap-x-[158px] flex-wrap">
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
                <p className="mt-3 text-sm mb-4 tracking-tighter">
                  {item.label}
                </p>
              </div>
              <div className="flex">
                <p className="text-[#5E626F] text-[13px] mr-1">바로가기</p>
                <Image src={arrow} alt="arrow" width={20} height={20} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="xl:mt-[46px] mt-[60px] ">
        <div className="flex flex-wrap gap-y-12">
          <div className="min-w-40 max-w-screen-[400px]">
            <p className="text-xs mb-2.5">상호명</p>
            <p className="text-[#5E626F] mb-[5px] text-[13px]">하이퍼하이어</p>
            <p className="text-[#5E626F] text-[13px]">
              Hyperhire India Private Limited
            </p>
          </div>
          <div className="min-w-40 xl:ml-[11px]">
            <p className="text-xs mb-2.5">대표 CEO</p>
            <p className="text-[#5E626F] mb-[5px] text-[13px]">김주현</p>
            <p className="text-[#5E626F] text-[13px]">Juhyun Kim</p>
          </div>
          <div className="min-w-40">
            <p className="text-xs mb-2.5">사업자등록번호 CIN</p>
            <p className="text-[#5E626F] mb-[5px] text-[13px]">427-86-01187</p>
            <p className="text-[#5E626F] text-[13px]">U74110DL2016PTC290812</p>
          </div>
          <div className="min-w-40  xl:ml-[42px]">
            <p className="text-xs mb-2.5">주소 ADDRESS</p>
            <p className="text-[#5E626F] mb-[5px] text-[13px]">
              서울특별시 강남대로 479 , 지하 1층 238호
            </p>
            <p className="text-[#5E626F] text-[13px] tracking-tighter">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
              Delhi, 110053 India
            </p>
          </div>
        </div>

        <p className="mt-7 pb-[95px] text-[#5E626F] text-[13px]">
          ⓒ 2023 Hyperhire
        </p>
      </section>
    </footer>
  );
}
