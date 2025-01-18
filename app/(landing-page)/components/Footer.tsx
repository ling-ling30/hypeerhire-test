import React from 'react';

import Contact from './FooterComponents/Contact';
import Accessibility from './FooterComponents/Accessibility';
import Information from './FooterComponents/Information';

export default function Footer() {
  return (
    <footer className="xl:pt-20 pt-16 px-4 xl:pl-[346px] font-black bg-[#FBFBFB] text-[#343741] tracking-tighter">
      {/* Contact */}
      <section className="flex gap-x-[158px] flex-wrap">
        <Contact />
        <Accessibility />
      </section>
      <Information />
    </footer>
  );
}
