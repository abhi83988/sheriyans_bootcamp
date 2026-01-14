'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function StudentGrowthSection() {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    const students = [
        {
            alt: 'Student Success',
            src: 'https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image%20588254504.png'
        },
        {
            alt: 'Learning Journey',
            src: 'https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image%20588254505.png'
        },
        {
            alt: 'Skill Development',
            src: 'https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image%20588254506.png'
        },
        {
            alt: 'Career Growth',
            src: 'https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image%20588254507.png'
        },
        {
            alt: 'Achievement',
            src: 'https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image%20588254508.png'
        },
        {
            alt: 'Progress',
            src: 'https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image%20588254509.png'
        },
        {
            alt: 'Excellence',
            src: 'https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image%20588254510.png'
        },
        {
            alt: 'Success Story',
            src: 'https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image%20588254511.png'
        }
    ];

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const cards = wrapperRef.current?.querySelectorAll('.card');
        if (!cards || cards.length === 0) return;

        // Define exit directions for each card (different angles)
        const exitPositions = [
            { x: -800, y: -400 },  // 1st - Top-left
            { x: 800, y: -400 },   // 2nd - Top-right
            { x: -900, y: 0 },     // 3rd - Middle-left
            { x: 900, y: 0 },      // 4th - Middle-right
            { x: -800, y: 400 },   // 5th - Bottom-left
            { x: 800, y: 400 },    // 6th - Bottom-right
            { x: 700, y: 0 },      // 7th - Right side (stays visible)
            { x: -700, y: 0 }      // 8th - Left side (stays visible)
        ];

        // Create animation for each card
        cards.forEach((card, index) => {
            const exitPos = exitPositions[index];
            const isLastTwo = index >= 6; // Last two images (7th and 8th)

            // All cards start from deep center (inside screen)
            gsap.set(card, {
                x: 0,
                y: 0,
                z: -800,
                scale: 0.5,
                opacity: 0,
                rotationX: 0,
                rotationY: 0
            });

            // Create timeline for sequential animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `top+=${index * 15}% top`,
                    end: `top+=${index * 15 + 60}% top`,
                    scrub: 0.5,
                    // markers: true // Uncomment to debug
                }
            });

            if (isLastTwo) {
                // Last two images: emerge and stay on screen
                tl.fromTo(card,
                    {
                        x: 0,
                        y: 0,
                        z: -1000,
                        scale: 0.3,
                        opacity: 0
                    },
                    {
                        x: exitPos.x,
                        y: exitPos.y,
                        z: 0,
                        scale: 1,
                        opacity: 1,
                        rotationX: 0,
                        rotationY: 0,
                        ease: 'power2.out'
                    }
                );
            } else {
                // First 6 images: emerge and exit
                tl.fromTo(card,
                    {
                        x: 0,
                        y: 0,
                        z: -1000,
                        scale: 0.3,
                        opacity: 0
                    },
                    {
                        x: exitPos.x * 0.7,
                        y: exitPos.y * 0.7,
                        z: 50,
                        scale: 1,
                        opacity: 1,
                        rotationX: Math.random() * 15 - 7.5,
                        rotationY: Math.random() * 15 - 7.5,
                        ease: 'power2.out',
                        duration: 0.5
                    }
                ).to(card, {
                    x: exitPos.x * 1.5,
                    y: exitPos.y * 1.5,
                    z: -300,
                    scale: 0.5,
                    opacity: 0,
                    ease: 'power2.in',
                    duration: 0.5
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="bg-black text-white md:py-32 pt-10 md:pt-44 w-full">
            <h1 className="font-[bwGrad-m] text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] md:!text-6xl !text-[8.5vw] lg:flex px-10 justify-center">
                From Self-Doubt → <div className="accent ml-2">To Self-Confidence</div>
            </h1>
            <p className="text-center md:text-3xl lg:text-4xl md:mt-0 mt-1 px-6 md:px-14 leading-snug text-white/50 font-[bwGrad-l] capitalize">
                students growth and achievements.
            </p>

            <div ref={containerRef} className="md:h-[200vh] lg:h-[600vh] mt-5">
                <div
                    ref={wrapperRef}
                    className="cardWrapper md:h-screen sticky top-0 origin-center overflow-visible flex flex-wrap gap-4 items-center justify-center"
                    style={{
                        perspective: '1000px',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {students.map((student, index) => (
                        <div
                            key={index}
                            className="card md:absolute md:h-96 max-md:w-[40%] w-full"
                        >
                            <img
                                alt={student.alt}
                                className="md:h-full md:mx-auto object-contain md:object-cover rounded-lg"
                                src={student.src}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
