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

        // Exit direction for each card: -1 = left, 1 = right, 0 = stay
        const exitDirections = [
            -1,  // 1st - exit left
            1,   // 2nd - exit right
            1,   // 3rd - exit right
            1,   // 4th - exit right
            -1,  // 5th - exit left
            -1,  // 6th - exit left
            0,   // 7th - stay (coming from right)
            0    // 8th - stay (coming from left)
        ];

        // Create animation for each card
        cards.forEach((card, index) => {
            const exitDirection = exitDirections[index];
            const shouldStay = exitDirection === 0;

            // For last 2 cards, they come from sides
            let initialX = 0;
            let initialZ = -300;

            if (index === 6) { // 7th card - comes from right
                initialX = 700;
                initialZ = 0;
            } else if (index === 7) { // 8th card - comes from left
                initialX = -700;
                initialZ = 0;
            }

            // Set initial state
            gsap.set(card, {
                x: initialX,
                z: initialZ,
                scale: shouldStay ? 0.7 : 0.3,
                opacity: 0
            });

            // Create timeline for sequential animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `top+=${index * 13}% top`,
                    end: shouldStay ? `top+=${index * 13 + 50}% top` : `top+=${index * 13 + 26}% top`,
                    scrub: 1,
                    // markers: true // Uncomment to debug
                }
            });

            // Animation based on card type
            if (shouldStay) {
                // Last 2 cards: Come from left/right and stay in center
                tl.to(card, {
                    x: 0,
                    z: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                });
            } else {
                // First 6 cards: Emerge from center then exit
                tl.to(card, {
                    x: 0,
                    z: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                }).to(card, {
                    x: exitDirection * 700,
                    z: -200,
                    scale: 0.5,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.in'
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
                    className="cardWrapper md:h-screen sticky top-0 origin-center overflow-hidden flex flex-wrap gap-4 items-center justify-center"
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
