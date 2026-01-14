'use client';

import React from 'react';

const HeaderNav = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-white z-50">
            <nav className="flex items-center justify-center py-4 px-6">
                <div
                    className="shadow-md border-[.4px] backdrop-blur-2xl border-white/20 text-white pointer-events-auto backdrop-blur-xl font-[bwGrad-t] py-3.5 px-8 flex items-center gap-10 rounded-full text-sm"
                    style={{
                        boxShadow: 'rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset'
                    }}
                >
                    <button className="cursor-pointer transition hover:text-[#9685fe]">
                        Home
                    </button>
                    <button className="cursor-pointer transition hover:text-[#9685fe]">
                        Courses
                    </button>
                    <span className="transition text-[#9685fe] font-extrabold cursor-default">
                        Bootcamp
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default HeaderNav;
