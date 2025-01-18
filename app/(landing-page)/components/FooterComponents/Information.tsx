import React from 'react';

export default function Information() {
  return (
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
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
            110053 India
          </p>
        </div>
      </div>

      <p className="mt-7 pb-[95px] text-[#5E626F] text-[13px]">
        ⓒ 2023 Hyperhire
      </p>
    </section>
  );
}
