import React from 'react';
import HyperhireLogo from '../../../components/hyperhire-logo';
import BurgerIcon from '@/public/burger-icon.svg';
import Image from 'next/image';
import Button from '@/components/Button';
import Menu from './HeaderComponents/Menu';

export default function Header() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between h-[60px] 2xl:px-[388.5] xl:px-72 lg:px-52 p-6">
      <HyperhireLogo />
      <figure className="relative  block sm:hidden">
        <Image
          src={BurgerIcon}
          alt="burger icon"
          priority
          width={24}
          height={7}
          className="-translate-y-[20px]"
        />
      </figure>

      <section className="hidden sm:block">
        <Menu />
      </section>

      <section className="hidden sm:block text-base font-black">
        <Button className="tracking-tighter text-[#4A77FF]">문의하기</Button>
      </section>
    </nav>
  );
}
