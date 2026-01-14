'use client';

export default function     WhyBootcamp() {
    const features = [
        {
            title: 'Structure',
            description: 'A step-by-step learning path that keeps you disciplined. No confusion, no randomness you always know what to do next.'
        },
        {
            title: 'Mentorship',
            description: 'Learn directly from real engineers who guide you every day. You never feel stuck because someone is always there to help you will always have a mentor to connect with.'
        },
        {
            title: 'Community',
            description: 'Grow with people who share the same goals and energy. Your peers push you, support you, and become your coding family.'
        },
        {
            title: 'Competition',
            description: 'Weekly challenges that make you sharper and faster. You don\'t just learn — you perform like a real engineer.'
        }
    ];

    return (
        <div className="flex flex-col w-full items-center py-10 md:py-20 z-0 relative bg-black">
            <h1 className="font-medium text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] md:mb-10 lg:mb-10 mb-14 max-md:text-[8.5vw] text-white">
                Why this <span className="text-[#9685fe]">BootCamp?</span>
            </h1>

            <div className="flex flex-col justify-center w-full items-center gap-5">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-2 pb-1 w-[90%] lg:w-[70%]"
                        style={{
                            background: 'linear-gradient(to bottom, transparent, #9685FE)',
                            clipPath: 'polygon(0px 0px, 100% 0px, 75% 100%, 25% 100%)'
                        }}
                    >
                        <div
                            className="md:h-[25vh] lg:h-[30vh] group flex flex-col items-center pb-15 justify-end cursor-pointer"
                            style={{
                                background: 'linear-gradient(to bottom, #000, #1e1e2f)',
                                clipPath: 'polygon(0px 0px, 100% 0px, 75.3% 100%, 24.7% 100%)'
                            }}
                        >
                            <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium text-white">
                                {feature.title}
                            </h1>
                            <div className="w-1/2 mt-5 lg:mt-3 lg:overflow-hidden lg:max-h-0 lg:group-hover:max-h-40 transition-all duration-500 text-center">
                                <p className="font-light lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-400 capitalize text-white">
                                    {feature.description.split(/(\bstep-by-step learning path\b|\breal engineers\b|\bsomeone is always there\b|\bthe same goals and energy\b|\bcoding family\b|\bWeekly challenges\b|\bperform like a real engineer\b)/gi).map((part, i) => {
                                        const isHighlight = /step-by-step learning path|real engineers|someone is always there|the same goals and energy|coding family|Weekly challenges|perform like a real engineer/i.test(part);
                                        return isHighlight ? (
                                            <span key={i} className="text-[#9685fe] font-normal">
                                                {part}
                                            </span>
                                        ) : (
                                            part
                                        );
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
