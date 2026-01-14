// app/components/HeroSection.jsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [svgTransform, setSvgTransform] = useState({ x: 0, y: 0, rotate: 0 })

  useEffect(() => {
    const animate = () => {
      setSvgTransform({
        x: Math.sin(Date.now() / 1000) * 0.6,
        y: Math.cos(Date.now() / 1000) * 0.4,
        rotate: Math.sin(Date.now() / 2000) * 3
      })
    }
    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    { name: 'Gaurav', image: 'https://codersgyan.com/testimonials/gaurav.jpg' },
    { name: 'Harshit', image: 'https://codersgyan.com/testimonials/harshit.jpg' },
    { name: 'Indranil', image: 'https://codersgyan.com/testimonials/indranil.jpg' },
    { name: 'Santosh', image: 'https://codersgyan.com/testimonials/santosh.jpg' },
    { name: 'Sujoy', image: 'https://codersgyan.com/testimonials/sujoy.jpg' }
  ]

  return (
    <div className="relative w-full min-h-screen bg-[#171717] text-white overflow-hidden">
      {/* Snow/Particles Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <SnowEffect />
      </div>

      <div className="container mx-auto px-4 pt-32 md:pt-40 pb-8 relative z-10">
        {/* Top Section - Testimonials & Rating */}
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Decorative Leaves & Testimonials */}
          <div className="w-fit flex items-center md:items-end justify-center gap-2">
            {/* Left Decorative SVG */}
            <div className="hidden md:block">
              <DecorativeSVG transform={svgTransform} />
            </div>

            <div className="flex flex-wrap-reverse md:flex-nowrap items-center gap-3 md:gap-4 justify-center">
              {/* Profile Pictures */}
              <div className="flex items-center -space-x-4">
                {testimonials.map((person, idx) => (
                  <div 
                    key={idx}
                    className="lg:hover:scale-110 transition-transform duration-300 overflow-hidden border-[3px] border-[#171717] bg-[#171717] rounded-full relative w-11 h-11"
                  >
                    <Image
                      alt={`${person.name} profile`}
                      fill
                      className="object-cover pointer-events-none"
                      src={person.image}
                    />
                  </div>
                ))}
              </div>

              {/* Rating Section */}
              <div className="flex flex-col items-center md:items-start -space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm">
                    <span className="font-semibold text-white">4.9</span>
                    <span className="text-zinc-400"> / 5</span>
                  </p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-xs md:text-sm text-zinc-400 text-center md:text-left">
                  Over 133K+ students on YT
                </p>
              </div>
            </div>

            {/* Right Decorative SVG (Flipped) */}
            <div className="hidden md:block scale-x-[-1]">
              <DecorativeSVG transform={svgTransform} />
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-5xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="relative inline-block">
                We
                {/* Santa Cap on "We" */}
                <div className="absolute w-12 h-8 -top-3 -right-2 md:-top-4 md:-right-3 z-10 scale-x-[-1]">
                  <Image
                    alt="Santa hat"
                    fill
                    className="object-contain"
                    src="https://codersgyan.com/theme/winter/santa-cap.png"
                  />
                </div>
              </span>
              {' '}make sure you become{' '}
              <br className="hidden md:block" />
              <span className="text-[#ffd439]">Fullstack Engineer</span>
              <span className="relative inline-block">
                <span className="text-[#ffd439]">.</span>
                {/* Guaranteed Badge */}
                <span 
                  className="hidden md:inline-block absolute -top-4 -right-16 bg-[#068713] text-white px-4 py-1.5 rounded-lg text-2xl font-semibold shadow-lg whitespace-nowrap"
                  style={{ 
                    transform: 'rotate(-8deg)',
                    fontFamily: 'Caveat, cursive'
                  }}
                >
                  Guaranteed!
                </span>
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Learn to code with simple lessons, real projects, and tools that prepare you for real-world development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 pt-4 relative">
              <Link 
                href="/membership"
                className="group relative w-full md:w-auto px-8 py-3.5 text-base font-semibold rounded-full bg-[#ffd439] text-[#171717] flex items-center justify-center gap-2 hover:bg-[#ffdb4d] transition-all duration-300 md:rounded-br-none"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="lg:group-hover:-rotate-12 transition-transform duration-300"
                >
                  <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                  <path d="M5 21h14" />
                </svg>
                <span>Become Pro Member</span>
              </Link>

              {/* Risk-free text with arrow */}
              <div className="hidden md:flex absolute -bottom-20 left-24 items-center gap-2 animate-pulse opacity-60">
                <p className="text-lg text-zinc-500" style={{ fontFamily: 'Caveat, cursive', transform: 'rotate(-5deg)' }}>
                  100% Risk-free
                </p>
                <svg width="60" height="40" viewBox="0 0 81 84" fill="none" className="scale-y-[-1] -ml-2">
                  <path d="M16.5579 30.5227C22.4725 28.623 28.2492 29.3749 33.4667 31.6508C41.3459 35.0881 47.9522 42.0005 51.8464 48.614C54.2944 52.7702 54.4502 56.7492 55.8651 61.5377C55.9225 61.7316 56.1293 61.8068 56.3272 61.7054C56.5245 61.6049 56.6391 61.3648 56.5811 61.1718C55.1497 56.3272 54.9774 52.3095 52.5011 48.1044C48.5525 41.3988 41.8496 34.3948 33.8601 30.9088C28.4988 28.57 22.5574 27.8153 16.4791 29.7675C16.2743 29.8332 16.1259 30.0549 16.1476 30.2634C16.1694 30.472 16.3531 30.5884 16.5579 30.5227Z" fill="transparent" stroke="#666" strokeWidth="1" />
                  <path d="M57.0873 62.1097C57.0832 62.0921 57.0533 61.9757 57.0388 61.8734C56.9763 61.45 56.9339 60.6847 56.9361 59.7042C56.947 56.4142 57.4643 50.7129 59.6242 47.3C59.7488 47.1031 59.7164 46.8667 59.5524 46.7716C59.3884 46.6764 59.1547 46.7579 59.0301 46.9548C56.7828 50.5058 56.2014 56.4357 56.1908 59.8586C56.1897 60.317 56.1975 60.7315 56.2135 61.0885C55.5902 60.3287 54.9902 59.5491 54.3985 58.7583C52.6959 56.4811 50.6985 54.9884 48.0625 53.8966C47.8867 53.8232 47.6568 53.9314 47.5515 54.1372C47.4454 54.3425 47.5029 54.5697 47.6794 54.6422C50.2161 55.6936 52.1405 57.1294 53.7796 59.3211C54.5532 60.3542 55.342 61.3695 56.1743 62.3467C56.2571 62.444 56.4755 62.6936 56.5123 62.7223C56.7223 62.886 56.9338 62.7112 56.9791 62.6705C57.0011 62.6509 57.2635 62.3944 57.0873 62.1097Z" fill="transparent" stroke="#666" strokeWidth="1" />
                </svg>
              </div>

              <Link 
                href="/courses"
                className="w-full md:w-auto px-8 py-3.5 text-base font-medium rounded-full border border-[#27272a] bg-[#27272a] text-white flex items-center justify-center gap-2 hover:bg-[#27272a]/70 transition-all duration-300 md:rounded-tl-none"
              >
                Check Courses
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Video & Cards */}
        <div className="relative mt-20 md:mt-32">
          {/* Mobile Mockup - Centered Top */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 z-30 scale-110">
            <div className="relative">
              <Image
                alt="Mobile mockup"
                width={280}
                height={560}
                className="pointer-events-none"
                src="https://codersgyan.com/images/mobile-mockup.svg"
              />
              
              {/* Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-[#615FFF] blur-3xl opacity-40 -z-10"></div>
              
              {/* Winter Flowers Bottom Right */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 z-10">
                <Image
                  alt="winter theme"
                  fill
                  className="object-contain"
                  src="https://codersgyan.com/theme/winter/flowers.png"
                />
              </div>
            </div>
          </div>

          {/* Video Container with Gradients */}
          <div className="relative max-w-6xl mx-auto">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#171717] via-transparent to-[#171717] z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-transparent to-[#171717] z-10 pointer-events-none"></div>
            
            {/* Side Blurs */}
            <div className="absolute left-0 top-0 bottom-0 w-1/4 backdrop-blur-sm z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1/4 backdrop-blur-sm z-10"></div>
            
            {/* Video */}
            <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                poster="https://codersgyan.com/images/video-poster.jpg"
              >
                <source src="https://stream.mux.com/pzLnaOsX00Tp1t02XioubWg9LOYqOJz302vMLxmXJiY73s.m3u8" type="application/x-mpegURL" />
              </video>
            </div>
          </div>

          {/* Info Cards */}
          {/* Left Card - Founder Intro */}
          <div className="hidden lg:block absolute bottom-32 left-8 xl:left-20 max-w-sm bg-black/30 backdrop-blur-md rounded-2xl rounded-br-none p-6 z-20">
            <div className="absolute -top-6 -left-6">
              <svg width="40" height="40" viewBox="0 0 45 44" fill="none" className="rotate-[320deg]">
                <path d="M36.3562 38.1666C37.6286 37.1429 38.8965 36.1398 40.1378 35.0848C40.4057 34.8586 40.4338 34.4919 40.2025 34.2645C39.9705 34.0348 39.5657 34.0335 39.3003 34.2589C38.0651 35.3073 36.8081 36.3022 35.5442 37.3185C35.2718 37.5388 35.2332 37.9064 35.4553 38.1391C35.6805 38.3731 36.0838 38.3869 36.3562 38.1666Z" fill="transparent" stroke="#9f9fa9" strokeWidth="1" />
                <path d="M23.6045 34.5567C24.4674 29.8476 25.0705 25.117 25.8234 20.4006C25.8737 20.0799 25.6318 19.8005 25.2842 19.7745C24.934 19.7493 24.6099 19.9854 24.5572 20.3069C23.8072 25.0151 23.2072 29.7376 22.3439 34.4371C22.2856 34.7579 22.5207 35.0418 22.8679 35.0751C23.2175 35.1077 23.5455 34.8752 23.6045 34.5567Z" fill="transparent" stroke="#9f9fa9" strokeWidth="1" />
              </svg>
            </div>
            <p className="font-bold text-white text-sm mb-2">Hello, I'm Rakesh K</p>
            <p className="text-white/80 text-sm leading-relaxed">
              The Founder, Editor, Programmer, Teacher and All Other Cool Things At Coder's Gyan.
            </p>
          </div>

          {/* Right Card - About Teaching */}
          <div className="hidden lg:block absolute bottom-32 right-8 xl:right-20 max-w-sm bg-black/30 backdrop-blur-md rounded-2xl rounded-tl-none p-6 z-20">
            <p className="text-white/80 text-sm leading-relaxed">
              Students Started Knowing Me For My Elaborated And Easy-To-Understand YouTube Coding Tutorials In Hindi.
            </p>
          </div>

          {/* Decorative Pattern Bottom */}
          <div className="absolute -bottom-10 left-4 opacity-20">
            <svg width="120" height="120" viewBox="0 0 121 121" fill="none">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#666" />
                </pattern>
              </defs>
              <rect width="121" height="121" fill="url(#dots)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// Snow Effect Component
function SnowEffect() {
  return (
    <div className="snow-container">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            opacity: Math.random() * 0.6 + 0.2
          }}
        />
      ))}
    </div>
  )
}

// Decorative SVG Component
function DecorativeSVG({ transform }) {
  return (
    <svg 
      width="28" 
      height="42" 
      viewBox="0 0 30 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        transform: `translateX(${transform.x}px) translateY(${transform.y}px) rotate(${transform.rotate}deg)` 
      }}
    >
      <path d="M14.0947 9.35871C16.8587 9.08173 19.5519 5.86753 19.2482 1.59668C15.2005 2.17114 12.7117 6.59369 14.0947 9.35871Z" stroke="rgba(91, 91, 96, 1)" strokeWidth="0.5" fill="rgba(91, 91, 96, 1)" />
      <path d="M9.84495 15.0454C11.3313 13.8755 12.8841 8.96429 9.62272 5.5204C5.42024 8.68822 8.16782 14.1711 9.84495 15.0454Z" stroke="rgba(91, 91, 96, 1)" strokeWidth="0.5" fill="rgba(91, 91, 96, 1)" />
      <path d="M8.46051 23.3394C9.32182 21.6553 9.0378 16.0771 4.0246 15.0236C1.87123 19.234 6.57147 23.2461 8.46051 23.3394Z" stroke="rgba(91, 91, 96, 1)" strokeWidth="0.5" fill="rgba(91, 91, 96, 1)" />
    </svg>
  )
}

// Star Icon Component
function StarIcon() {
  return (
    <svg 
      fill="#ffd439" 
      stroke="#ffd439" 
      strokeWidth="10" 
      width="12" 
      height="12"
      viewBox="0 0 329.942 329.942"
    >
      <path d="M329.208 126.666a15 15 0 0 0-12.109-10.209l-95.822-13.922-42.854-86.837a15.001 15.001 0 0 0-26.902 0l-42.851 86.836-95.825 13.922a15 15 0 0 0-8.313 25.586l69.339 67.582-16.375 95.446a15 15 0 0 0 21.764 15.813l85.711-45.059 85.71 45.059a15.2 15.2 0 0 0 7.021 1.723c8.275-.012 14.979-6.723 14.979-15 0-1.152-.13-2.275-.376-3.352l-16.233-94.629 69.339-67.583a15 15 0 0 0 3.797-15.376" />
    </svg>
  )
}
