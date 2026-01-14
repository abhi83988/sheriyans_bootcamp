import React from "react";

export default function UspsSection() {
  return (
    <section className="bg-[#DFC9C0] rounded-2xl px-8 py-16 lg:px-24 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
        {/* Left column */}
        <div className="lg:w-1/3 flex flex-col items-start">
          <h2 className="font-[400] font-[Mori] text-black text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight relative">
            Unlock the power{" "}
            <span className="relative inline-block">
              of banking data
              <svg
                className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[85%] h-auto -z-10 pointer-events-none"
                viewBox="0 0 448 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802C356.34 14.6774 368.152 14.4647 374.62 13.754"
                  stroke="#8247FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428C262.309 8.17355 340.509 5.23404 418.755 4.25167C427.273 4.14472 452.789 3.54451 444.281 3.07897"
                  stroke="#8247FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Button */}
          <div className="mt-8">
            <a
              href="https://merchant.contiant.com/register"
              target="_blank"
              className="relative inline-flex items-center justify-center rounded-full bg-[#1f2933] text-white font-semibold px-8 py-4 text-lg overflow-hidden group"
            >
              <span className="relative">Get started</span>
              <span className="ml-3 relative flex items-center">
                <img
                  src="https://cdn.prod.website-files.com/63ce8fdfb773bb355dff79ca/63ceb1c0291756f54529666a_arrow.svg"
                  alt="arrow icon"
                  width={18}
                  height={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </span>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-6 flex-1">
          {/* Card 1 */}
          <div className="bg-[#F1D9D0] rounded-[2.25em] p-10 flex flex-col justify-between flex-1">
            <div className="relative mb-6">
              <div className="bg-[#1f2933] rounded-full w-24 h-24 absolute top-6 left-6" />
              <div className="backdrop-blur-sm bg-[#1f293333] rounded-b-[300px] w-[270px] h-[135px] rotate-[-30deg]" />
            </div>
            <div>
              <h3 className="font-[400] font-[Mori] text-3xl text-black leading-snug mb-2">
                Balance
              </h3>
              <p className="font-[Mori] text-black text-opacity-60 text-lg leading-snug">
                Verify real-time account balances.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F1D9D0] rounded-[2.25em] p-10 flex flex-col justify-between flex-1">
            <div className="relative mb-6">
              <div className="bg-[#1f2933] rounded-full w-24 h-24 absolute top-6 left-6" />
              <div className="backdrop-blur-sm bg-[#1f293333] rounded-full w-24 h-24 relative" />
            </div>
            <div>
              <h3 className="font-[400] font-[Mori] text-3xl text-black leading-snug mb-2">
                Transactions
              </h3>
              <p className="font-[Mori] text-black text-opacity-60 text-lg leading-snug">
                Access detailed transaction history.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F1D9D0] rounded-[2.25em] p-10 flex flex-col justify-between flex-1 h-[30em]">
            <div className="relative mb-6">
              <div className="absolute top-[16%] left-[6%] backdrop-blur-sm bg-[#1f293333] w-40 h-30 bg-[url('https://cdn.prod.website-files.com/63ce8fdfb773bb355dff79ca/63e60db5e8930fbe4b2eabab_bank-details.svg')] bg-cover" />
              <div className="backdrop-blur-sm bg-[#1f293333] w-40 h-30 relative" />
            </div>
            <div>
              <h3 className="font-[400] font-[Mori] text-3xl text-black leading-snug mb-2">
                Bank account details
              </h3>
              <p className="font-[Mori] text-black text-opacity-60 text-lg leading-snug">
                Verify users’ identities and reduce fraud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
