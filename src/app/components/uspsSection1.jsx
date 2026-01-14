"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ButtonSection from "./button";

// icons from CardFees
import {
  BringToFrontIcon,
  CircleCheckBigIcon,
  BlendIcon,
} from "./icons/BringToFrontIcon";

gsap.registerPlugin(ScrollTrigger);

export default function UspsSection() {
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const [isDesktop, setIsDesktop] = useState(false);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  // switch animation only on desktop
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const [card1, card2, card3] = cardRefs.current;

    // reset state
    gsap.set([card1, card2, card3], {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    });

    // CARD 1
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: card1,
        start: "top 65%",
        end: "top 20%",
        scrub: 1,
      },
    });
    t1.fromTo(
      card1,
      { x: 400, opacity: 0, rotate: 0 },
      { x: 0, opacity: 1, rotate: 0, duration: 0.5 }
    ).to(card1, { x: 50, rotate: -10, scale: 0.9, duration: 0.5 });

    // CARD 2
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: card2,
        start: "top 60%",
        end: "top 15%",
        scrub: 1,
      },
    });
    t2.fromTo(
      card2,
      { x: 450, opacity: 0, scale: 0.8, rotate: 8 },
      { x: 300, opacity: 1, rotate: 0, scale: 0.85, duration: 0.5 }
    ).to(card2, { x: -100, rotate: 0, zIndex: 10, scale: 1, duration: 0.5 });

    // CARD 3
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: card3,
        start: "top 55%",
        end: "top 10%",
        scrub: 1,
      },
    });
    t3.fromTo(
      card3,
      { x: 480, opacity: 0, rotate: 0 },
      { x: 400, opacity: 1, scale: 0.9, rotate: 0, duration: 0.5 }
    ).to(card3, { x: -180, scale: 1.01, rotate: 10, zIndex: 30, duration: 0.5 });

    return () => {
      t1.kill();
      t2.kill();
      t3.kill();
    };
  }, [isDesktop]);

  // CardFees style data
  const cardData = [
    {
      title: "A+ Exceptional",
      description:
        "Finter is a game-changer! Its cutting-edge banking solutions and outstanding service have transformed how I handle my finances. I highly recommend it to all!",
      icon: <BringToFrontIcon size={35} />,
    },
    {
      title: "The Best Bank App",
      description:
        "I've tried various banking apps, but Finter is the best! Its intuitive interface and innovative features make banking effortless. I'm a satisfied customer!",
      icon: <CircleCheckBigIcon size={35} />,
    },
    {
      title: "Exceptional Service",
      description:
        "I’ve had a fantastic experience with Finter! Their commitment to security and customer satisfaction sets them apart. Truly exceptional service!",
      icon: <BlendIcon size={35} />,
    },
  ];

  return (
    <div className="relative mx-3 md:mx-6 lg:mx-7 my-40 bg-[#DFC9C0] rounded-4xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-start lg:space-x-8">
      {/* Header Section */}
      <div className="flex flex-col items-start lg:w-1/3 mb-8 lg:mb-0">
        <h1 className="text-[2rem] sm:text-[2.4rem] lg:text-[3rem] font-bold leading-tight text-black mb-4">
          Unlock the Power of Banking Data
        </h1>
        <p className="text-lg mb-6">
          Experience exceptional financial services and insights like never
          before.
        </p>
        <ButtonSection text="Get started" />
      </div>

      {/* Cards */}
      {/* Mobile grid (no GSAP) */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="bg-[#F1D9D0] text-[#1D2C3C] p-6 rounded-2xl shadow-xl relative"
          >
            <div className="absolute top-4 left-4">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 mt-10">{card.title}</h3>
            <p className="text-base">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop animated cards */}
      <div className="hidden lg:flex lg:flex-row lg:space-x-6 w-full lg:w-2/3">
        {cardData.map((card, i) => (
          <div
            ref={addToRefs}
            key={i}
            className="bg-[#B8E3E3] text-[#1D2C3C] p-6 rounded-2xl shadow-xl relative w-full lg:w-1/3"
          >
            <div className="absolute top-4 left-4">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 mt-10">{card.title}</h3>
            <p className="text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
