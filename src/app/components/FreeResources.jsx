import Image from 'next/image';
import Link from 'next/link';

export default function FreeResources() {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full justify-between">
      {/* Left Content Section */}
      <div className="max-w-[21.25rem] lg:max-w-[21.25rem] xl:max-w-[23.6875rem]">
        <h2 className="text-[#111827] text-[2rem] leading-[2.5rem] font-bold lg:font-semibold mb-6">
          Upskill with our Free Resources
        </h2>
        <p className="text-[#4b5563] text-base leading-6 mb-5 lg:mb-[3.125rem]">
          Engage and excel with our diverse collection of free learning resources, 
          from quizzes to e-books and interactive challenges- designed to lift your 
          career at zero cost!
        </p>
        <Link href="/resources">
          <button className="hidden lg:inline-block min-h-[4.25rem] py-5 px-8 lg:px-[3.75rem] text-lg font-semibold leading-[1.6875rem] rounded-2xl text-white bg-[#194cff] border-2 border-[#194cff] outline-none transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[5px_5px_0_#fdb035]">
            Explore Now
          </button>
        </Link>
      </div>

      {/* Right Resources Section */}
      <div className="relative flex lg:flex-row w-full items-center mb-10 pl-10 xl:pl-0 min-h-[510px]">
        {/* Pulse Animation Circle */}
        <div className="relative w-[151px] h-[151px] rounded-full">
          {/* Background Pulse */}
          <div className="absolute w-[151px] h-[151px] rounded-full bg-[#194cff] animate-pulse-custom" />
          
          {/* Button Pulse with Icons */}
          <div className="absolute w-[151px] h-[151px] rounded-full bg-[#194cff] flex justify-center items-center border-none outline-none">
            <Image 
              src="https://www.wscubetech.com/images/home-images/pdf-icon.svg" 
              alt="icon" 
              width={0} 
              height={0}
              className="absolute w-auto h-auto transition-all duration-500"
              loading="lazy"
            />
            <Image 
              src="https://www.wscubetech.com/images/home-images/videos-icon.svg" 
              alt="icon" 
              width={0} 
              height={0}
              className="absolute w-auto h-auto transition-all duration-500"
              loading="lazy"
            />
            <Image 
              src="https://www.wscubetech.com/images/home-images/adob-icon.svg" 
              alt="icon" 
              width={0} 
              height={0}
              className="absolute w-auto h-auto transition-all duration-500"
              loading="lazy"
            />
            <Image 
              src="https://www.wscubetech.com/images/home-images/doubts-icon.svg" 
              alt="icon" 
              width={60} 
              height={60}
              className="w-auto h-auto transition-all duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Resource Capsules */}
        <div className="w-full min-h-[510px] resources-capsules-bg">
          <ResourceButton href="/resources/dsa" className="mt-0 mr-[10.8125rem]">
            DSA Tutorial
          </ResourceButton>
          <ResourceButton href="/resources/python" className="mt-4 mr-0">
            Python Tutorial
          </ResourceButton>
          <ResourceButton href="/resources/java" className="mt-[1.8125rem] mr-[4.6875rem]">
            Java Tutorial
          </ResourceButton>
          <ResourceButton href="/resources/javascript" className="mt-5 mr-[6.875rem]">
            JavaScript Tutorial
          </ResourceButton>
          <ResourceButton href="/resources#online-compilers" className="mt-[1.625rem] mr-10">
            Online Compilers
          </ResourceButton>
          <ResourceButton href="/resources#quizzes" className="mt-9 mr-[3.75rem]">
            Quizzes
          </ResourceButton>
          <ResourceButton href="/events" className="mt-[1.0625rem] mr-[11.5625rem]">
            Masterclass
          </ResourceButton>
        </div>
      </div>

      {/* Mobile Explore Button */}
      <Link href="/resources" className="inline-block lg:hidden">
        <button className="block min-h-12 py-2.5 px-8 lg:px-[3.75rem] text-lg font-medium leading-[1.6875rem] rounded-2xl text-white bg-[#194cff] border-2 border-[#194cff] outline-none transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[5px_5px_0_#fdb035]">
          Explore Now
        </button>
      </Link>
    </div>
  );
}

// Reusable Resource Button Component
function ResourceButton({ href, children, className }) {
  return (
    <button 
      className={`block ml-auto w-max-content h-[51px] px-1 text-lg leading-[1.6875rem] font-normal bg-white border-2 border-[#111827] rounded-[26px] outline-none transition-all duration-200 shadow-[4px_4px_0_0_#111827] hover:shadow-none ${className}`}
    >
      <Link 
        href={href} 
        target="_blank"
        className="block text-[#1f2937] no-underline"
      >
        {children}
      </Link>
    </button>
  );
}
