'use client';

import { useState } from 'react';

export default function InstructorSection() {
    const [selectedInstructor, setSelectedInstructor] = useState('sarthak');

    const instructors = {
        harsh: {
            name: 'Harsh Sharma',
            image: 'https://bootcamp.sheryians.com/HPH.png',
            bg: 'HBG.png',
            title: 'Harsh',
            subtitle: 'Sharma',
            description: 'Your learning journey is further supported by Sarthak Sharma — a full-stack MERN instructor with 6+ years of experience and over 50,000 students trained.'
        },
        sarthak: {
            name: 'Sarthak Sharma',
            image: 'https://bootcamp.sheryians.com/SPH.png',
            bg: 'SSBG.png',
            title: 'Sarthak',
            subtitle: 'Sharma',
            description: 'Your learning journey is further supported by Sarthak Sharma — a full-stack MERN instructor with 6+ years of experience and over 50,000 students trained.'
        },
        devendra: {
            name: 'Devendra Dhote',
            image: 'https://bootcamp.sheryians.com/DPH.png',
            bg: 'DBG.png',
            title: 'Devendra',
            subtitle: 'Dhote',
            description: 'Your learning journey is further supported by Devendra Dhote — a full-stack MERN instructor with 6+ years of experience and over 50,000 students trained.'
        },
        ankur: {
            name: 'Ankur Prajapati',
            image: 'https://bootcamp.sheryians.com/APH.png',
            bg: 'ABG.png',
            title: 'Ankur',
            subtitle: 'Prajapati',
            description: 'Your learning journey is further supported by Ankur Prajapati — a full-stack MERN instructor with 6+ years of experience and over 50,000 students trained.'
        }
    };

    const currentInstructor = instructors[selectedInstructor];

    return (
        <div className="py-5 md:py-20 bg-black">
            <h1 className="font-[bwGrad-m] text-center text-white leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem]">
                <span className="accent text-[#9685FE]">Learn from Engineers,</span> Not Trainers
            </h1>

            <div className="h-[90vh] md:h-screen overflow-hidden flex items-end px-5 md:px-10 lg:px-20 justify-between relative z-0 md:my-10 my-20">
                {/* Top Gradient */}
                <div className="h-[20vh] w-full absolute z-1 left-0 top-0 bg-gradient-to-b from-black from-0% to-transparent to-100%"></div>

                {/* Bottom Gradient */}
                <div className="h-[20vh] w-full absolute z-1 bottom-0 left-0 bg-gradient-to-t from-black from-0% to-transparent to-100%"></div>

                {/* Background Image */}
                <div
                    className="h-screen absolute inset-0 w-full transition-opacity duration-300"
                    style={{
                        backgroundImage: `url("https://bootcamp.sheryians.com/${currentInstructor.bg}")`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center top'
                    }}
                ></div>

                {/* Content */}
                <div className="flex flex-col w-full relative justify-between h-full pt-28 md:pt-14 pb-5 md:pb-10 lg:pb-20">
                    <div className="w-full">
                        <h1 className="instructor-title relative max-md:mt-14 text-white text-[4.5rem] max-md:leading-tight md:text-[7rem] lg:text-[10rem] whitespace-nowrap font-[bwGrad-m]">
                            {currentInstructor.title}
                        </h1>
                        {currentInstructor.subtitle && (
                            <h1 className="instructor-title md:absolute max-md:text-right md:top-[27%] max-md:leading-tight md:left-[40%] text-white text-[4rem] md:text-[7rem] lg:text-[10rem] whitespace-nowrap font-[bwGrad-m]">
                                {currentInstructor.subtitle}
                            </h1>
                        )}
                        <p className="md:w-[35%] max-md:absolute top-10 mt-10">
                            {currentInstructor.description}
                        </p>
                    </div>

                    {/* Instructor Thumbnails */}
                    <div className="flex relative z-2 gap-2 md:gap-3 h-[20vh] md:h-[33vh]">
                        {Object.keys(instructors).map((key) => (
                            <div
                                key={key}
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedInstructor(key)}
                                className={`thumb h-full flex-1 max-md:object-contain relative max-w-38 rounded-2xl border-4 border-black outline-2 outline-black overflow-hidden cursor-pointer transition-all duration-300 ${selectedInstructor === key ? 'scale-105 opacity-100 shadow-2xl' : 'opacity-85'
                                    }`}
                                style={{
                                    backgroundImage: `url("https://bootcamp.sheryians.com/${instructors[key].bg}")`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center bottom'
                                }}
                            >
                                {/* Sheryians Badge */}
                                <svg className="ml-auto md:w-[100px]" viewBox="0 0 128 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dii_5_3329)">
                                        <rect x="12" y="12" width="104" height="33" rx="16.5" fill="#E5E5E5" />
                                        <rect x="12.5" y="12.5" width="103" height="32" rx="16" stroke="#181818" strokeOpacity="0.03" />
                                        <path d="M50.7025 26.0532C50.7025 26.6089 50.3564 27.0832 49.2593 27.0832C48.0739 27.0832 47.5879 26.5274 47.5879 25.653H48.1916C48.1916 26.2903 48.5598 26.5867 49.2667 26.5867C49.8336 26.5867 50.0987 26.4533 50.0987 26.0754C50.0987 25.5937 49.6054 25.5122 49.0089 25.327C48.3168 25.1046 47.7572 24.8897 47.7572 24.2228C47.7572 23.6374 48.2505 23.2521 49.0899 23.2521C50.2312 23.2521 50.5773 23.8819 50.5773 24.4896H49.9735C49.9735 23.9931 49.6716 23.7485 49.0899 23.7485C48.685 23.7485 48.361 23.8671 48.361 24.2006C48.361 24.5563 48.6114 24.6674 49.2004 24.8601C49.922 25.0972 50.7025 25.2603 50.7025 26.0532Z" fill="black" />
                                    </g>
                                </svg>

                                <img
                                    className="h-full w-full object-cover"
                                    alt={instructors[key].name}
                                    src={instructors[key].image}
                                />

                                {/* Name Badge */}
                                <div className="absolute max-md:hidden bottom-0 backdrop-blur-xs z-999 w-full">
                                    <div className="flex justify-center items-center gap-2 px-2 py-1.5 md:p-2 md:py-4">
                                        <span className="text-white font-[bwGrad-r] text-xs">{instructors[key].name}</span>
                                        <svg className="max-md:hidden" width="24" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_5_3316)">
                                                <path d="M10.3379 1.10391C11.2532 0.178905 12.7475 0.178906 13.6628 1.10391L14.6454 2.09696C15.1377 2.59451 15.827 2.84539 16.524 2.7807L17.915 2.65159C19.2107 2.53132 20.3554 3.49184 20.462 4.78876L20.5764 6.18109C20.6337 6.8787 21.0005 7.51395 21.576 7.91239L22.7246 8.70763C23.7944 9.44838 24.0539 10.92 23.3019 11.982L22.4946 13.1221C22.0901 13.6933 21.9627 14.4157 22.1474 15.0908L22.5161 16.4383C22.8596 17.6935 22.1124 18.9876 20.8537 19.3177L19.5024 19.6722C18.8253 19.8498 18.2634 20.3213 17.971 20.9572L17.3873 22.2264C16.8436 23.4087 15.4394 23.9198 14.2629 23.3636L12.9999 22.7665C12.3671 22.4673 11.6336 22.4673 11.0008 22.7665L9.73781 23.3636C8.56136 23.9198 7.15718 23.4087 6.61347 22.2264L6.02976 20.9572C5.73731 20.3213 5.17539 19.8498 4.49834 19.6722L3.14703 19.3177C1.88832 18.9876 1.14117 17.6935 1.4846 16.4383L1.85331 15.0908C2.03804 14.4157 1.91066 13.6933 1.50616 13.1221L0.698826 11.982C-0.0531879 10.92 0.206296 9.44837 1.27618 8.70763L2.42477 7.91239C3.00025 7.51395 3.36702 6.87869 3.42434 6.18109L3.53874 4.78876C3.6453 3.49184 4.79 2.53132 6.08573 2.65159L7.47677 2.7807C8.17372 2.84539 8.86301 2.59451 9.35533 2.09696L10.3379 1.10391Z" fill="url(#paint0_linear_5_3316)" />
                                                <path d="M10.6254 16.5337C10.2736 16.5337 9.92175 16.399 9.65375 16.131L6.90499 13.3823C6.36761 12.8449 6.36761 11.9763 6.90499 11.4389C7.44237 10.9015 8.31098 10.9015 8.84836 11.4389L10.6254 13.216L15.1513 8.69015C15.6886 8.15276 16.5573 8.15276 17.0946 8.69015C17.632 9.22753 17.632 10.0961 17.0946 10.6335L11.5971 16.131C11.3291 16.399 10.9773 16.5337 10.6254 16.5337Z" fill="#181818" />
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_5_3316" x1="12.0004" y1="0.410156" x2="12.0004" y2="23.5885" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FDFDFD" />
                                                    <stop offset="1" stopColor="#D7D7D7" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Large Instructor Image */}
                <div className="img absolute right-0 bottom-0 z-0 max-w-1/2 min-w-44 h-[90vh]">
                    <img
                        alt="Selected instructor"
                        className="side-img w-full h-full object-contain object-bottom transition-all duration-300"
                        src={currentInstructor.image}
                    />
                </div>
            </div>
        </div>
    );
}
