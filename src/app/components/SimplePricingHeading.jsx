'use client';

import { useState, useEffect } from 'react';

export default function SimplePricingHeading() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set target date (example: 30 days from now)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30);

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    const CheckIcon = () => (
        <svg height="20" className="mt-1" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 14.9994C0 6.71545 6.71545 0 14.9994 0C23.2833 0 29.9988 6.71545 29.9988 14.9994C29.9988 23.2833 23.2833 29.9988 14.9994 29.9988C6.71545 29.9988 0 23.2833 0 14.9994Z" fill="white" />
            <path d="M20.9995 10.498L12.7498 18.7477L9 14.9979" stroke="black" strokeWidth="2.24991" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <div className="bg-black text-white w-full overflow-hidden relative z-0 py-20">
            {/* Countdown Timer Section */}
            <div className="pt-10 pb-14 md:pb-32 flex flex-col items-center relative overflow-hidden">
                <h1 className="font-[bwGrad-m] text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] md:mb-6 max-md:!text-[8.5vw]">
                    Bootcamp<span className="accent"> Start From</span>
                </h1>

                <div className="timer-container" style={{
                    margin: 'clamp(1rem, 4vw, 5rem) auto 0',
                    display: 'flex',
                    gap: 'clamp(12px, 4vw, 40px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    padding: '0 2vw'
                }}>
                    <div className="time-block" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '5rem' }}>
                        <div className="number" style={{
                            fontSize: 'clamp(48px, 10vw, 120px)',
                            fontWeight: 900,
                            color: 'white',
                            fontFamily: '"bwGrad-r", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                            lineHeight: 1,
                            marginBottom: '8px',
                            textShadow: '0 0 20px rgba(255,255,255,0.3)',
                            transition: 'transform 200ms'
                        }}>{String(timeLeft.days).padStart(2, '0')}</div>
                        <div className="label" style={{
                            fontSize: 'clamp(12px, 1.6vw, 16px)',
                            color: '#888',
                            fontWeight: 500,
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}>Days</div>
                    </div>
                    <div className="colon" style={{ fontSize: 'clamp(28px, 6vw, 80px)', color: 'white', fontWeight: 300, margin: '0 10px' }}>:</div>
                    <div className="time-block" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '5rem' }}>
                        <div className="number" style={{
                            fontSize: 'clamp(48px, 10vw, 120px)',
                            fontWeight: 900,
                            color: 'white',
                            fontFamily: '"bwGrad-r", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                            lineHeight: 1,
                            marginBottom: '8px',
                            textShadow: '0 0 20px rgba(255,255,255,0.3)',
                            transition: 'transform 200ms'
                        }}>{String(timeLeft.hours).padStart(2, '0')}</div>
                        <div className="label" style={{
                            fontSize: 'clamp(12px, 1.6vw, 16px)',
                            color: '#888',
                            fontWeight: 500,
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}>Hours</div>
                    </div>
                    <div className="colon" style={{ fontSize: 'clamp(28px, 6vw, 80px)', color: 'white', fontWeight: 300, margin: '0 10px' }}>:</div>
                    <div className="time-block" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '5rem' }}>
                        <div className="number" style={{
                            fontSize: 'clamp(48px, 10vw, 120px)',
                            fontWeight: 900,
                            color: 'white',
                            fontFamily: '"bwGrad-r", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                            lineHeight: 1,
                            marginBottom: '8px',
                            textShadow: '0 0 20px rgba(255,255,255,0.3)',
                            transition: 'transform 200ms'
                        }}>{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <div className="label" style={{
                            fontSize: 'clamp(12px, 1.6vw, 16px)',
                            color: '#888',
                            fontWeight: 500,
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}>Minutes</div>
                    </div>
                    <div className="colon" style={{ fontSize: 'clamp(28px, 6vw, 80px)', color: 'white', fontWeight: 300, margin: '0 10px' }}>:</div>
                    <div className="time-block" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '5rem' }}>
                        <div className="number" style={{
                            fontSize: 'clamp(48px, 10vw, 120px)',
                            fontWeight: 900,
                            color: 'white',
                            fontFamily: '"bwGrad-r", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                            lineHeight: 1,
                            marginBottom: '8px',
                            textShadow: '0 0 20px rgba(255,255,255,0.3)',
                            transition: 'transform 200ms'
                        }}>{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <div className="label" style={{
                            fontSize: 'clamp(12px, 1.6vw, 16px)',
                            color: '#888',
                            fontWeight: 500,
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}>Seconds</div>
                    </div>
                </div>

                <button
                    className="shadow-md border-[.4px] backdrop-blur-2xl border-white/20 relative cursor-pointer text-sm md:text-xl md:mb-14 bg-black/20 backdrop-blur-md inline-block px-10 py-3 mt-10 shrink-0 rounded-full"
                    style={{ boxShadow: 'rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset' }}
                >
                    Join Now
                </button>
            </div>

            {/* Simple Pricing Heading */}
            <h1 className="font-[bwGrad-m] text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem]">
                <span
                    className="bg-gradient-to-b from-gray-400 from-50% to-black text-[13vw] md:!text-9xl"
                    style={{
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Simple Pricing
                </span>
            </h1>

            {/* Pricing Cards */}
            <div className="lg:w-3/4 w-[90%] relative flex lg:flex-row flex-col mx-auto justify-center z-0 gap-10 mt-16">
                {/* Online Bootcamp Card */}
                <div className="lg:w-[45%] relative overflow-hidden p-10 md:p-20 bg-black rounded-xl z-0">
                    {/* Animated Background */}
                    <div className="h-full w-full absolute left-0 top-0 transition-transform duration-700 -z-1" style={{ transformStyle: 'preserve-3d' }}>
                        <div className="w-full aspect-square rounded-full absolute left-[30%] top-1/2 overflow-hidden">
                            <div className="h-full w-full absolute z-1" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 70%)' }}></div>
                            <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
                                <video className="w-full h-full object-cover" src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4" autoPlay loop playsInline muted />
                            </div>
                        </div>
                        <div className="w-full opacity-80 aspect-square rounded-full absolute right-1/2 md:bottom-[30%] overflow-hidden">
                            <div className="h-full w-full absolute z-1" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0) 0%, black 70%)' }}></div>
                            <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
                                <video className="w-full h-full object-cover" src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4" autoPlay loop playsInline muted />
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-5 top-5 px-4 py-1 bg-gradient-to-b from-gray-600 to-black w-max rounded-full">KODEX</div>
                    <h1 className="text-2xl md:text-4xl font-[bwGrad-l]">Online Bootcamp</h1>
                    <p className="font-[bwGrad-m] text-sm md:text-base mt-4">
                        <span className="text-white/50 font-[bwGrad-l]">Build</span> real-world projects, master core technologies,
                        <span className="text-white/50 font-[bwGrad-l]"> and</span> become industry-ready
                        <span className="text-white/50 font-[bwGrad-l]"> projects.</span>
                    </p>
                    <div className="mt-5 flex gap-2 items-baseline text-xs text-white/50 font-[bwGrad-m]">
                        <h1 className="text-4xl md:text-5xl font-[bwGrad-r] text-white">₹29,500</h1> (25,000 + 18% GST)
                    </div>
                    <div className="py-5 md:py-10 border-y border-white/10 my-4">
                        <h1 className="text-sm text-white/80 mb-3 font-[bwGrad-l]">What's Included</h1>
                        <ul className="space-y-3 text-sm font-[bwGrad-l]">
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />One-on-One Challenges</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />Exclusive Tech Masterclasses</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />High-Intensity Debug Battles</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />Weekly Mini Hack Sprints</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />Live Doubt Solving Sessions</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />Peer Code Reviews</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />Offline 2-Day Hackathon Finale</li>
                        </ul>
                        <div className="mt-5 md:mt-10 flex justify-between">
                            <h1 className="text-sm mb-3 font-[bwGrad-l]">Delivery Time</h1>
                            <h1 className="text-sm mb-3 font-[bwGrad-l]">180Hrs</h1>
                        </div>
                    </div>
                    <div className="pl-5 pr-2 py-2 rounded-full items-center bg-white text-black flex justify-between cursor-pointer">
                        <h1 className="text-sm font-[bwGrad-m]">Get a Call Back</h1>
                        <div className="w-10 flex items-center justify-center aspect-square rounded-full bg-black text-white">→</div>
                    </div>
                </div>

                {/* Offline Bootcamp Card */}
                <div className="lg:w-[45%] relative overflow-hidden p-10 md:p-20 bg-black rounded-xl z-0">
                    {/* Animated Background */}
                    <div className="h-full w-full absolute left-0 top-0 transition-transform duration-700 -z-1" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(180deg)' }}>
                        <div className="w-full aspect-square rounded-full absolute left-[30%] top-1/2 overflow-hidden">
                            <div className="h-full w-full absolute z-1" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 70%)' }}></div>
                            <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
                                <video className="w-full h-full object-cover" src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4" autoPlay loop playsInline muted />
                            </div>
                        </div>
                        <div className="w-full opacity-80 aspect-square rounded-full absolute right-1/2 md:bottom-[30%] overflow-hidden">
                            <div className="h-full w-full absolute z-1" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0) 0%, black 70%)' }}></div>
                            <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
                                <video className="w-full h-full object-cover" src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4" autoPlay loop playsInline muted />
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-5 top-5 px-4 py-1 bg-gradient-to-b from-gray-600 to-black w-max rounded-full">KODR</div>
                    <h1 className="text-2xl md:text-4xl font-[bwGrad-l]">Offline Bootcamp</h1>
                    <p className="font-[bwGrad-m] text-sm md:text-base mt-4">
                        <span className="text-white/50 font-[bwGrad-l]">Learn in a</span> real tech environment with mentors, teams, live competitions,
                        <span className="text-white/50 font-[bwGrad-l]"> and a</span> physical space built
                        <span className="text-white/50 font-[bwGrad-l]"> for builders.</span>
                    </p>
                    <div className="mt-5 flex gap-2 items-baseline text-xs text-white/50 font-[bwGrad-m]">
                        <h1 className="text-4xl md:text-5xl font-[bwGrad-r] text-white">₹59,000</h1> (50,000 + 18% GST)
                    </div>
                    <div className="py-5 md:py-10 border-y border-white/10 my-4">
                        <h1 className="text-sm text-white/80 mb-3 font-[bwGrad-l]">What's Included</h1>
                        <ul className="space-y-3 text-sm font-[bwGrad-l]">
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />In-Person Team Challenges</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />Daily Classroom Sessions</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />On-Campus Tech Masterclasses</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />Real-Time Mentor Support</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />High-Energy Debug Battles (Offline Arena)</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />Offline Mini Hack Sprints</li>
                            <li className="flex items-start text-white/80 gap-4"><CheckIcon />Leadership & Presentation Drills</li>
                        </ul>
                        <div className="mt-5 md:mt-10 flex justify-between">
                            <h1 className="text-sm mb-3 font-[bwGrad-l]">Delivery Time</h1>
                            <h1 className="text-sm mb-3 font-[bwGrad-l]">250Hrs</h1>
                        </div>
                    </div>
                    <div className="pl-5 pr-2 py-2 rounded-full items-center bg-white text-black flex justify-between cursor-pointer">
                        <h1 className="text-sm font-[bwGrad-m]">Get a Call Back</h1>
                        <div className="w-10 flex items-center justify-center aspect-square rounded-full bg-black text-white">→</div>
                    </div>
                </div>
            </div>

            {/* Purple Glow Effect */}
            <div
                className="w-full aspect-square absolute rounded-full top-[60%] z-[-1] blur-lg"
                style={{
                    boxShadow: '0px 0px 150px 20px #7733d4'
                }}
            ></div>
        </div>
    );
}
