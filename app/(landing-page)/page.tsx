import Image from 'next/image';
import iconMarketing from '@/public/icon-marketing.svg';
import iconBox from '@/public/icon-box.svg';
import iconImage from '@/public/icon-image.svg';
import iconTarget from '@/public/icon-target.svg';
import iconCall from '@/public/icon-call.svg';
import iconPresentation from '@/public/presentation.svg';
import triangle from '@/public/triangle.svg';
import { FadeIn } from '@/components/FadeIn';
import { FadeInUp } from '@/components/FadeInUp';
import { SlideShow } from './components/SlideShow';

const slide = [
  {
    icon: iconMarketing,
    alt: 'marketing icon',
    label: '해외 마케팅',
  },
  {
    icon: iconImage,
    alt: 'image icon',
    label: '퍼블리셔',
  },
  {
    icon: iconBox,
    alt: 'box icon',
    label: '캐드원(제도사)',
  },
  {
    icon: iconTarget,
    alt: 'target icon',
    label: '해외 세일즈',
  },
  {
    icon: iconCall,
    alt: 'call icon',
    label: '해외 CS',
  },
  {
    icon: iconPresentation,
    alt: 'presentation icon',
    label: '해외 마케팅',
  },
];

export default function MarketingLine() {
  return (
    <section className="text-white xl:pt-[190px]  pb-[100px] font-black pt-[96px] tracking-tighter 2xl:pl-[355px] xl:[200px] lg:pl-[150px] md:pl-[100px] sm:pl-[50px] px-3">
      <FadeIn delay={0.3}>
        <div className="py-1.5 px-3 xl:bg-white rounded-lg text-lg lg:text-[#40E2E8] bg-[#8BC4FF] font-black inline-flex mb-7 relative items-center text-center">
          <p>풀타임, 파트타임</p>
          <Image
            className="absolute xl:block hidden -bottom-2"
            priority
            src={triangle}
            alt="triangle"
            width={12}
            height={11}
          />
          <svg
            className="absolute -bottom-2 text-[#8BC4FF] xl:hidden"
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370835 1.25C0.178386 0.916665 0.418948 0.499999 0.803848 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z"
              fill="#8BC4FF"
            />
          </svg>
        </div>
      </FadeIn>
      <FadeInUp>
        <div className="xl:text-5xl text-4xl mb-6 font-black space-y-4 tracking-tighter">
          <p>최고의 실력을 가진</p>
          <p>외국인 인재를 찾고 계신가요?</p>
        </div>
      </FadeInUp>
      <FadeInUp>
        <div className="hidden xl:block text-2xl mb-6 font-black">
          <p>법률 및 인사관리 부담없이</p>
          <p>1주일 이내에 원격으로 채용해보세요.</p>
        </div>
        <div className="block xl:hidden text-white/80">
          <p>법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
        </div>
        <p className="hidden xl:block text-lg underline font-black mb-[60px]">
          개발자가 필요하신가요?
        </p>
      </FadeInUp>
      <FadeIn>
        <div className=" gap-x-12 2xl:flex hidden">
          <div>
            <div className="w-[129px] h-[1px]  bg-white" />
            <div className="w-[161px]">
              <p className="font-bold py-2">평균 월 120만원</p>
              <p className="text-sm">임금을 해당 국가를 기준으로 계산합니다.</p>
            </div>
          </div>

          <div>
            <div className="w-[129px] h-[1px] bg-white" />
            <div className="w-[161px]">
              <p className="font-bold py-2">최대 3회 인력교체</p>
              <p className="text-sm">
                막상 채용해보니 맞지 않아도 걱정하지 마세요.
              </p>
            </div>
          </div>
          <div>
            <div className="w-[129px] h-[1px] bg-white" />
            <div className="w-[161px]">
              <p className="font-bold py-2">평균 3일, 최대 10일</p>
              <p className="text-sm">
                급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* slide */}

      <FadeIn>
        <div className=" overflow-x-hidden 2xl:block hidden">
          <SlideShow
            pauseOnHover
            className="mt-[60px] flex gap-x-2 [--duration:20s] overflow-hidden"
          >
            {slide.map((item, index) => (
              <div
                className=" h-[88px] inline-flex gap-x-6 items-center bg-white/20 rounded-xl px-4 relative cursor-pointer overflow-hidden"
                key={index + item.label}
              >
                <figure className="bg-white/40 size-14 rounded-md flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={32}
                    height={32}
                  />
                </figure>
                <p className="font-bold w-[220px]">{item.label}</p>
              </div>
            ))}
          </SlideShow>
        </div>
      </FadeIn>
    </section>
  );
}
