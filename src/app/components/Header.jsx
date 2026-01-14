// app/components/Header.jsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="container flex items-center justify-center py-4">
      <div className="flex items-center gap-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group pr-4">
          <div className="relative bg-white rounded-full">
            {/* Santa Hat */}
            <div className="absolute w-[52px] h-[32px] top-[-0.8rem] left-[-1rem] rotate-[345deg] z-10">
              <img
                alt="Santa hat"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-auto absolute inset-0"
                src="https://codersgyan.com/theme/winter/santa-cap.png"
              />
            </div>
            {/* Logo */}
            <img
              alt="Coder's gyan logo"
              width={40}
              height={40}
              decoding="async"
              className="lg:group-hover:scale-[0.8] lg:group-hover:-rotate-8 duration-[300ms] ease-out"
              src="https://codersgyan.com/logo-transparent.svg"
            />
          </div>
          <span className="font-bold text-lg">Coder's Gyan</span>
        </Link>

        {/* Divider */}
        <div className="bg-white/20 w-[1px] h-[30px] hidden lg:block"></div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center relative">
          <Link
            href="/"
            className="relative px-4 text-sm lg:text-base font-medium transition duration-[300ms] ease-out lg:hover:text-[#ffd439]"
          >
            <span>Home</span>
          </Link>

          <Link
            href="/courses"
            className="relative px-4 text-sm lg:text-base font-medium transition duration-[300ms] ease-out lg:hover:text-[#ffd439]"
          >
            <span>Courses</span>
          </Link>

          <Link
            href="/membership"
            className="relative px-4 text-sm lg:text-base font-medium transition duration-[300ms] ease-out text-[#ffd439]"
          >
            <span>Membership</span>
            {/* Active Indicator */}
            <div className="absolute -bottom-7 rounded-full left-0 w-full h-[2px] bg-gradient-to-r from-[#ffd439]/10 via-[#ffd439] to-[#ffd439]/10 blur-[1px]"></div>
          </Link>

          <Link
            href="https://iprep.ai"
            target="_blank"
            className="relative px-4 text-sm lg:text-base font-medium transition duration-[300ms] ease-out lg:hover:text-[#ffd439]"
          >
            <span>Interviews</span>
            <span className="relative top-[-3px] left-[4.8px] rotate-[351deg] inline-block text-[#ffd439] text-sm font-semibold font-[var(--font-caveat)] animate-pulse">
              NEW !
            </span>
          </Link>

          {/* Dropdown Menu */}
          <button
            aria-label="Dropdown menu"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative px-4 text-sm lg:text-base font-medium group flex items-center gap-2 transition duration-[300ms] ease-out lg:hover:text-[#ffd439]"
          >
            <span className="relative">Others</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`duration-[300ms] ease-out text-zinc-400 transition-transform ${isDropdownOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Right Side - Login & Dashboard */}
      <div className="flex items-center gap-4 lg:gap-8 lg:ml-12">
        <Link
          href="https://learn.codersgyan.com/login"
          target="_blank"
          className="text-sm lg:text-base font-medium lg:hover:text-[#ffd439] transition duration-[300ms] ease-out hidden lg:block"
        >
          Login
        </Link>

        <Link
          href="https://learn.codersgyan.com/user/dashboard"
          target="_blank"
          className="group hidden md:flex items-center gap-2 pt-2.5 pb-2.5 lg:pb-[0.7rem] md:pr-3 px-6 ml-3 text-sm lg:text-base font-medium transition duration-[300ms] ease-out rounded-full border border-[#27272a] bg-[#27272a] text-white hover:bg-[#27272a]/60"
        >
          Dashboard
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
            className="text-zinc-400 lg:text-zinc-600 lg:group-hover:text-white duration-[300ms] ease-out"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          title="Open mobile-menu"
          aria-label="Open mobile-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12H9" />
            <path d="M21 18H7" />
            <path d="M21 6H3" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-64 bg-[#171717] p-6" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4 mt-12">
              <Link href="/" className="text-base font-medium">Home</Link>
              <Link href="/courses" className="text-base font-medium">Courses</Link>
              <Link href="/membership" className="text-base font-medium text-[#ffd439]">Membership</Link>
              <Link href="https://iprep.ai" target="_blank" className="text-base font-medium">Interviews</Link>
              <Link href="https://learn.codersgyan.com/login" target="_blank" className="text-base font-medium mt-4">Login</Link>
              <Link href="https://learn.codersgyan.com/user/dashboard" target="_blank" className="text-base font-medium mt-2">Dashboard</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
