import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

type Props = {
  card: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ card, children }: Props) {
  return (
    <main className="2xl:relative  bg-[url('/background-image.png')] bg-cover overflow-x-hidden ">
      <div className="w-full bg-gradient-to-br from-[#26C2B9]/80 to-[#288BE7]/80">
        <Header />
        <section className="flex flex-wrap w-full">
          {children}
          <section className="2xl:absolute md:translate-x-40 2xl:left-[1070px] 2xl:top-[120px]  justify-center items-center">
            {card}
          </section>
        </section>
      </div>
      <Footer />
    </main>
  );
}
