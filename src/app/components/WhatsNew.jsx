'use client';

export default function WhatsNew() {
    const onlineFeatures = [
        'Learn from anywhere with focused daily live sessions',
        'Premium MERN + AI curriculum built for real industry readiness',
        'Build projects using a modern stack (React, Firebase, Next.js, Tailwind, Node, MongoDB, Cloud)',
        'Fast doubt-solving with direct WhatsApp support',
        'Weekly competitions + regular mentor led tasks and challenges',
        'Build real-world projects with every module',
        'A structured learning system that keeps you disciplined',
        'Perfect for students balancing college or work life'
    ];

    const offlineFeatures = [
        'Learn in person with a focused, high-performance classroom environment',
        'Build stronger discipline with a consistent, structured daily routine',
        'Get instant on-spot mentor help for faster doubt-solving',
        'Experience real teamwork, live collaboration, and professional presentations',
        'More competitions, in-person tech activities, weekly code sprint challenges',
        'Perfect for students who want full focus and a driven community around them',
        'Sharpen communication and presentation skills through real practice',
        'Weekly personality development sessions to level up confidence and soft skills',
        'Thrive in a high-energy community that keeps you accountable',
        'Weekly offline mini-projects to build real momentum'
    ];

    const CheckIcon = () => (
        <svg className="h-4 shrink-0 mt-1.5" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.5" cy="11.5" r="11" fill="#9685FE" fillOpacity="0.1" stroke="#9685FE" />
            <path d="M7 12.7538L9.45149 15L16 9" stroke="#9685FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <div className="text-center py-20 md:py-20 bg-black text-white">
            <h1 className="font-medium text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] max-md:text-[3.3rem]">
                What's New?
            </h1>
            <p className="md:mt-2 mt-1 lg:mt-3.5 max-w-[80%] mx-auto md:text-3xl text-lg lg:text-4xl text-white/50 font-normal capitalize">
                What Makes <span className="text-[#9685fe]">This Bootcamp Better</span> Than the Rest?
            </p>

            {/* Difference Label */}
            <div className="hidden md:flex h-10 md:h-14 md:mb-1 mt-16 md:mt-32 lg:mt-44 justify-center w-[40%] mx-auto gap-2">
                <div className="h-full flex-1 lg:block hidden border-dashed border-l border-t rounded-tl-xl w-20 border-white/30"></div>
                <h1 className="text-center font-normal hidden md:block md:-mt-6 text-3xl md:text-5xl lg:text-4xl">
                    Difference
                </h1>
                <div className="h-full flex-1 lg:block hidden border-dashed rounded-tr-xl border-t border-r border-white/30"></div>
            </div>

            {/* Cards Container */}
            <div className="md:w-[90%] max-md:mt-14 lg:w-[80%] lg:flex-row items-center lg:items-stretch flex-col flex justify-center gap-10 lg:gap-20 mx-auto">

                {/* Online Bootcamp Card */}
                <div className="lg:w-[43%] mx-auto md:mx-0 w-[90%] shrink-0">
                    <svg width="190" height="43" className="mx-auto mb-5" viewBox="0 0 190 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_44_3869)">
                            <path d="M61.2187 8.16661C61.2203 8.52127 61.3484 8.82469 61.6029 9.07685C61.8574 9.329 62.162 9.45426 62.5166 9.45262L65.5566 9.43856L65.6392 27.2984L62.5992 27.3124C62.2446 27.3141 61.9412 27.4421 61.689 27.6966C61.4368 27.9512 61.3116 28.2557 61.3132 28.6104L61.3269 31.5744L34.8792 31.6967L34.8655 28.7327C34.8639 28.378 34.7358 28.0746 34.4813 27.8225C34.2268 27.5703 33.9222 27.4451 33.5675 27.4467L30.5276 27.4608L30.4448 9.56295L33.4848 9.54889C33.8394 9.54725 34.1428 9.41918 34.395 9.16467C34.6472 8.91017 34.7724 8.60559 34.7708 8.25093L34.7562 5.09696L61.2039 4.97464L61.2187 8.16661Z" fill="white" />
                            <path d="M104.038 27.8808L104.054 31.3768L73.2744 31.4811L73.151 4.80539L103.931 4.77704L103.945 7.74101C103.947 8.09567 104.075 8.39908 104.329 8.65124C104.584 8.9034 104.888 9.02866 105.243 9.02702L108.283 9.01296L108.366 27.1008L105.327 27.1148C104.972 27.1165 104.668 27.2445 104.416 27.499L104.038 27.8808Z" fill="white" />
                            <path d="M120.806 26.5112L151.091 26.3712L151.113 31.1591L116.002 31.3215L115.949 19.8836L118.343 19.8726C118.875 19.8701 119.33 19.6907 119.708 19.3342C120.087 18.9525 120.275 18.4956 120.272 17.9636C120.27 17.4316 120.078 16.9765 119.696 16.5983C119.314 16.22 118.857 16.0321 118.325 16.0346L115.931 16.0457L115.879 4.72178L150.99 4.5594L151.013 9.34735L120.727 9.48742L120.746 13.6294C120.749 14.1614 120.928 14.6165 121.284 14.9949C121.666 15.3478 122.123 15.523 122.655 15.5206L146.671 15.4095L146.693 20.2354L122.677 20.3465C122.145 20.349 121.69 20.5411 121.312 20.9228C120.959 21.3045 120.784 21.7613 120.786 22.2933L120.806 26.5112Z" fill="white" />
                            <path d="M168.148 15.0369L166.87 15.0428C165.81 15.0477 164.954 15.912 164.959 16.9726C164.964 18.033 165.827 18.8884 166.888 18.8836L168.361 18.8768L159.746 31.1228L153.629 31.1511L164.079 17.0499L154.588 4.28991L160.578 4.26221L168.148 15.0369Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_44_3869" x="26.7668" y="2.30125" width="162.446" height="34.8785" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1.80594" />
                                <feGaussianBlur stdDeviation="1.82852" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.71 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_3869" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_3869" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    <div
                        className="py-14 border h-full border-white/20 px-4 text-left rounded-xl relative z-0 shadow-md overflow-hidden"
                        style={{ boxShadow: 'rgba(43, 38, 73, 0.7) 0px 0px 20px 0px' }}
                    >
                        <h1 className="text-center relative z-10 font-bold text-3xl md:text-5xl lg:text-4xl">
                            Online BootCamp
                        </h1>
                        <p className="text-center relative z-10 font-light md:mt-3 text-sm md:text-base mt-1.5 lg:mt-1 mb-3">
                            An exclusive online bootcamp by Sheryians.
                        </p>
                        <ul className="w-[95%] mx-auto relative z-10 text-left md:px-10 mt-8 lg:mt-10 space-y-3">
                            {onlineFeatures.map((feature, index) => (
                                <li key={index} className="flex gap-3 font-light md:text-xl lg:text-base">
                                    <CheckIcon />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="h-full w-full absolute left-0 top-0 transition-transform duration-700 z-0">
                            <img
                                className="h-full w-full object-cover"
                                alt=""
                                src="https://bootcamp.sheryians.com/Grainy%20Background.svg"
                            />
                        </div>
                    </div>
                </div>

                {/* Offline Bootcamp Card */}
                <div className="lg:w-[43%] mx-auto md:mx-0 w-[90%] shrink-0">
                    <svg className="mx-auto mb-5 -mt-10" width="250" viewBox="0 0 250 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M111.931 40.9107L64.5515 40.6772C56.9709 40.6398 55.1055 43.3442 55.2246 54.1991C55.3428 65.054 57.1823 67.7767 64.4178 67.8124L111.797 68.0459C116.271 68.0679 118.724 67.0898 119.977 63.91L114.421 63.8826C113.743 64.2491 112.887 64.3901 111.815 64.3848L64.4358 64.1513C60.5592 64.1322 59.5789 62.146 59.5317 54.2204C59.4845 46.2948 60.4852 44.3183 64.5334 44.3383L111.913 44.5718C115.875 44.5913 116.856 46.5775 116.817 54.4596C116.805 56.7896 116.712 58.6073 116.486 60.0125L121.076 56.9163C121.104 56.154 121.12 55.343 121.124 54.4808C121.177 43.6699 119.339 40.9472 111.931 40.9107Z" fill="white" />
                        <path d="M53.273 68.0994L38.8535 54.6956L53.3997 41.3678L47.42 41.303L34.2084 53.4111L10.2302 53.2929L10.289 41.3629L6.20474 41.3428L6.07293 68.0872L10.1572 68.1073L10.2101 57.3772L35.8811 57.5037L47.4632 68.0708L53.273 68.0994Z" fill="white" />
                        <path d="M126.875 62.5038L126.86 65.5816L175.116 65.8194C182.026 65.8535 183.764 63.6088 183.809 54.596C183.853 45.5832 182.137 43.3215 175.227 43.2874L126.971 43.0496L126.916 54.2136L130.682 52.0516L130.711 46.2601L170.218 46.4548L175.018 46.1731L175.017 46.4785L175.211 46.4794C179.117 46.4987 180.085 48.1183 180.054 54.5775C180.022 61.0366 179.037 62.6466 175.132 62.6274L174.937 62.6264L174.937 62.7407L126.875 62.5038Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M241.677 55.1441C242.913 55.8262 243.582 57.1439 243.571 59.4346L243.538 66.1567L239.783 66.1381L239.816 59.4161C239.827 57.2004 239.344 56.0714 237.429 56.062L190.45 55.8304L190.4 65.8948L186.645 65.8762L186.756 43.3442L237.491 43.5943C242.072 43.6168 243.641 45.2019 243.619 49.7459C243.605 52.5248 243.072 54.2121 241.677 55.1441Z" fill="white" />
                    </svg>

                    <div
                        className="py-14 border h-full border-white/20 px-4 text-left rounded-xl relative z-0 shadow-md overflow-hidden"
                        style={{ boxShadow: 'rgba(43, 38, 73, 0.7) 0px 0px 20px 0px' }}
                    >
                        <h1 className="text-center relative z-10 font-bold text-3xl md:text-5xl lg:text-4xl">
                            Offline BootCamp
                        </h1>
                        <p className="text-center relative z-10 font-light md:mt-3 text-sm md:text-base mt-1.5 lg:mt-1 mb-3">
                            An exclusive offline bootcamp by Sheryians.
                        </p>
                        <ul className="w-[95%] mx-auto relative z-10 text-left md:px-10 mt-8 lg:mt-10 space-y-3">
                            {offlineFeatures.map((feature, index) => (
                                <li key={index} className="flex gap-3 font-light md:text-xl lg:text-base">
                                    <CheckIcon />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="h-full w-full absolute left-0 top-0 transition-transform duration-700 z-0">
                            <img
                                className="h-full w-full object-cover"
                                alt=""
                                src="https://bootcamp.sheryians.com/Grainy%20Background.svg"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
