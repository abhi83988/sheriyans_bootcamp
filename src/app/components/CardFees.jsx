'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import ButtonSection from './button';

gsap.registerPlugin(ScrollTrigger);

export default function CardFees() {
  const cardWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = cardWrapperRef.current;

      const cards = gsap.utils.toArray('.card');
      const cardHeight = 240; // approx height of one card
      const totalHeight = cards.length * cardHeight;

      // Scroll up the whole card list smoothly
      gsap.to(wrapper, {
        y: `-${totalHeight - 600}px`, // 600 is visible container height
        ease: 'none',
        scrollTrigger: {
          trigger: '.abhusection',
          start: 'top center',
          end: `+=${totalHeight}`,
          scrub: true,
        },
      });

      // Animate individual cards scaling in & fading
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });

      // Animate credit card images on the right side
      gsap.utils.toArray('.image').forEach((img) => {
        gsap.from(img, {
          y: 150,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const cardData = [
    { title: 'A+ Exceptional', description: "You're extremely well-protected..." },
    { title: 'A Excellent', description: 'Strong cybersecurity controls...' },
    { title: 'A- Very Good', description: 'You’re above average...' },
    { title: 'B+ Insurable', description: 'You’re generally in good shape...' },
    { title: 'B. Acceptable', description: 'Coverage likely, but underwriters...' },
    { title: 'B- At Risk', description: 'You lack key controls insurers require...' },
    { title: 'Uninsurable. Critical Gaps', description: "You don’t currently meet minimum..." },
  ];

  return (
    <div className="min-h-195 sm:min-h-200 bg-[#0C1B28] text-white flex items-evenly justify-center rounded-4xl px-8 py-16 abhusection overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">

        {/* ===== Cards Scroll Column (Left) ===== */}
        <div
          className="relative overflow-hidden h-[600px]" // fixed height area for cards
        >
          <div
            ref={cardWrapperRef}
            className="flex flex-col gap-6"
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="card bg-[#B8E3E3] text-[#1D2C3C] p-6 rounded-2xl shadow-xl w-60 h-60 flex flex-col justify-center"
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Right Side Content (Text + Images + Button) ===== */}
        <div className="flex flex-col hidden md:block justify-between h-150 relative sm:w-80 lg:w-100 xl:w-150 2xl:w-180">
          <div className="sm:ml-0 lg:ml-0 xl:ml-10">
            <h1 className="relative text-[2rem] sm:text-[2.8rem] md:text-[2.7rem] lg:text-[3.7rem] xl:text-[4.6rem]
              font-normal leading-[1] tracking-[-0.03em] text-white whitespace-nowrap box-border">
              Tired of paying high <br />
              <span className="relative inline-block">
                Card fees?
                <svg className="absolute left-0 bottom--1 w-full h-6" viewBox="0 0 448 26" fill="none">
                  <motion.path
                    d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802"
                    stroke="#8247FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="301"
                    strokeDashoffset="301"
                    initial={{ strokeDashoffset: 301 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428"
                    stroke="#8247FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="446"
                    strokeDashoffset="446"
                    initial={{ strokeDashoffset: 446 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                  />
                </svg>
              </span>
            </h1>

            <p className="text-2xl text-white mb-8 mt-10">
              Join payments evolution with us. Accept bank payments
              <br />
              that are settled in seconds.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-end p-4">
            <div className="flex flex-row relative sm:ml-0 lg:ml-0 xl:ml-10">
              <img src="/cardfees.png" alt="Credit Card 1" className="image sm:w-55 sm:h-60 xl:w-55 xl:h-80 z-20 transform translate-y-8 -mr-16" />
              <img src="/cardfees.png" alt="Credit Card 2" className="image sm:w-55 sm:h-60 xl:w-55 xl:h-80 z-10 transform -translate-y-15" />
            </div>
            <div className="xl:ml-90 2xl:ml-0">
              <ButtonSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
