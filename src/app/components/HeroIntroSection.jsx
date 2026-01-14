'use client';

import React from 'react';

const HeroIntroSection = () => {
    return (
        <div className="bg-black text-white w-full">
            <div className="flex flex-col items-center pt-28 md:pt-46 pb-10 md:pb-20 md:px-0 px-5 z-0 relative">
                {/* Background Video Circle */}
                <div className="lg:w-[80%] w-full aspect-square absolute -top-[50%] left-1/2 translate-x-[-50%] z-[-1] rounded-full overflow-hidden">
                    <div className="w-full h-full bg-transparent">
                        <video
                            className="w-full h-full object-cover"
                            src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4"
                            autoPlay
                            loop
                            playsInline
                            muted
                        />
                    </div>
                    <div
                        className="h-full w-full absolute rounded-full top-0"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 80%)'
                        }}
                    />
                </div>

                {/* Badge Text */}
                <h4 className="mb-3 text-sm md:text-lg lg:text-sm font-[bwGrad-l]">
                    <span className="accent text-[#9685fe]">1000+</span> Happy students in the program
                </h4>

                {/* Main Heading */}
                <h1 className="text-center md:text-[3rem] text-[1.6rem] font-[bwGrad-r] leading-tight">
                    <span className="font-[bwGrad-m] text-center leading-tight text-[2.1rem] md:text-[4rem] lg:text-[4.5rem]">
                        The Builders' League
                    </span>
                    <br />
                    Sheryians <span className="accent text-[#9685fe]">Bootcamp</span>
                </h1>

                {/* Description */}
                <p className="mt-2 md:mt-4 text-center leading-snug md:text-lg md:max-w-2xl lg:max-w-3xl text-[.9rem] text-white/50 font-[bwGrad-t]">
                    5-month premium engineering journey that transforms ambitious learners into confident builders — through structure, challenge, and community.
                </p>

                {/* Fill The Form Button */}
                <button
                    className="shadow-md border-[.4px] backdrop-blur-2xl border-white/20 text-white font-[bwGrad-l] py-3 px-10 mt-5 max-md:text-sm lg:mt-10 justify-evenly flex gap-10 rounded-full cursor-pointer"
                    style={{
                        boxShadow: 'rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset'
                    }}
                >
                    Fill The Form
                </button>

                {/* YouTube Video */}
                <div className="md:w-3/4 w-[95%] border border-white/10 overflow-hidden rounded-xl md:rounded-4xl md:h-[70vh] aspect-video h-[30vh] mt-10 md:mt-20 lg:mt-28">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/UW0sJW5XndI?si=sXPdMfuALsePfL3x"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>

                {/* Bottom Heading */}
                <h1 className="text-[1.45em] md:text-3xl w-[90%] capitalize font-[bwGrad-r] mt-7 text-center md:max-w-2xl lg:max-w-3xl">
                    A journey that builds <span className="accent text-[#9685fe]">skills</span> and{' '}
                    <span className="accent text-[#9685fe]">real confidence.</span>
                </h1>

                {/* Request Callback Button */}
                <button
                    className="shadow-md border-[.4px] backdrop-blur-2xl border-white/20 text-white text-sm md:text-base font-[bwGrad-l] py-3 px-10 mt-4 justify-evenly flex gap-10 rounded-full cursor-pointer"
                    style={{
                        boxShadow: 'rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset'
                    }}
                >
                    Request Callback
                </button>
            </div>
        </div>
    );
};

export default HeroIntroSection;
