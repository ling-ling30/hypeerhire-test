'use client';
import Divider from '@/components/Divider';
import LinkButton from '@/components/LinkButton';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import caretDown from '@/public/caret-down.svg';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900', '800'],
  variable: '--font-inter',
});

// type Props = {};

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <section className="font-bold w-[270px] flex justify-between items-center text-md tracking-tighter">
        <div className="text-white relative">
          <div className="cursor-pointer flex" onClick={() => setOpen(!open)}>
            <p>채용</p>
            <Image src={caretDown} alt="caret down" width={16} height={7} />
          </div>
          {open && (
            <section
              className={`absolute left-0 w-60 bg-white text-[#344054] font-medium text-sm ${inter.variable} rounded-lg shadow-md`}
            >
              <LinkButton
                className="w-full h-[41px] font-bold text-left px-4 py-2.5"
                href="#"
              >
                채용
              </LinkButton>
              <LinkButton
                className="w-full h-[41px] text-left px-4 py-2.5"
                href="#"
              >
                해외 개발자 원격 채용
              </LinkButton>
              <LinkButton
                className="w-full h-[41px] text-left px-4 py-2.5"
                href="#"
              >
                외국인 원격 채용 (비개발 직군)
              </LinkButton>
              <Divider />
              <LinkButton
                className="w-full h-[41px] text-left px-4 py-2.5"
                href="#"
              >
                한국어 가능 외국인 채용
              </LinkButton>
            </section>
          )}
        </div>

        <div className="text-white">
          <LinkButton href="#">해외 개발자 활용 서비스</LinkButton>
        </div>
      </section>
    </>
  );
}
