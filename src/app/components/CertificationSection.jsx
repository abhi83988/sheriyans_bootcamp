'use client';

import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export default function CertificationSection() {
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

    const certificates = [
        'https://dfdx9u0psdezh.cloudfront.net/bootcamp/certificateKodr.jpg',
        'https://dfdx9u0psdezh.cloudfront.net/bootcamp/certificateKodex.jpg',
        'https://dfdx9u0psdezh.cloudfront.net/bootcamp/certificateKodr.jpg',
        'https://dfdx9u0psdezh.cloudfront.net/bootcamp/certificateKodex.jpg',
        'https://dfdx9u0psdezh.cloudfront.net/bootcamp/certificateKodr.jpg',
        'https://dfdx9u0psdezh.cloudfront.net/bootcamp/certificateKodex.jpg'
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            const img = document.querySelector('.main-certificate');
            if (!img) return;

            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            setTilt({ rotateX, rotateY });
        };

        const handleMouseLeave = () => {
            setTilt({ rotateX: 0, rotateY: 0 });
        };

        const img = document.querySelector('.main-certificate');
        if (img) {
            img.addEventListener('mousemove', handleMouseMove);
            img.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                img.removeEventListener('mousemove', handleMouseMove);
                img.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <div className="bg-black text-white text-center md:py-20 pb-10 relative z-0">
            <h1 className="font-[bwGrad-m] text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] max-md:text-[8vw]">
                Bootcamp <span className="accent inline">Certification</span>
            </h1>

            <div className="mt-10 flex flex-col gap-4 py-28 items-center justify-center">
                {/* First Marquee - Normal Direction */}
                <Marquee speed={50} gradient={false}>
                    <div className="w-full h-[20vh] md:h-[30vh] py-5 mr-4 flex gap-6">
                        {certificates.map((cert, index) => (
                            <img
                                key={index}
                                className="h-full blur-md rounded"
                                alt=""
                                src={cert}
                            />
                        ))}
                    </div>
                </Marquee>

                {/* Second Marquee - Reverse Direction */}
                <Marquee speed={50} gradient={false} direction="right">
                    <div className="w-full h-[20vh] md:h-[30vh] py-5 mr-4 flex gap-6">
                        {certificates.map((cert, index) => (
                            <img
                                key={index}
                                className="h-full blur-md rounded"
                                alt=""
                                src={cert}
                            />
                        ))}
                    </div>
                </Marquee>

                {/* Main Certificate Image with 3D Tilt */}
                <div className="img absolute z-5 w-[90%] md:w-[65%]" style={{ perspective: '1000px' }}>
                    <img
                        className="main-certificate rounded-xl overflow-hidden shadow-[0px_0px_50px_rgba(255,255,255)]"
                        alt=""
                        src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/certificateKodr.jpg"
                        style={{
                            transition: 'transform 250ms cubic-bezier(0.22, 0.61, 0.36, 1)',
                            willChange: 'transform',
                            transformStyle: 'preserve-3d',
                            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
