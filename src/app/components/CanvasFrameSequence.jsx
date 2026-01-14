'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CanvasFrameSequence() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const frameCount = 160;
    const images = useRef([]);
    const frameIndex = useRef(0);

    const currentFrame = (index) => {
        const frameNum = String(index + 1).padStart(5, '0');
        return `/images/frame_${frameNum}.avif`;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set canvas size
        const setCanvasSize = () => {
            const scale = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * scale;
            canvas.height = window.innerHeight * scale;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            context.scale(scale, scale);
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Preload all images
        const loadImages = () => {
            let loadedCount = 0;

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);

                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === frameCount) {
                        setImagesLoaded(true);
                    }
                };

                images.current[i] = img;
            }
        };

        loadImages();

        // Render function
        const render = () => {
            if (images.current[frameIndex.current]) {
                const img = images.current[frameIndex.current];

                // Clear canvas
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Calculate dimensions to cover canvas while maintaining aspect ratio
                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = img.width / img.height;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasRatio > imgRatio) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgRatio;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawHeight = canvas.height;
                    drawWidth = canvas.height * imgRatio;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        // Initial render
        if (images.current[0]) {
            render();
        }

        // GSAP ScrollTrigger animation
        const setupScrollAnimation = () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.5, // Smooth scrubbing
                    pin: canvas,
                    anticipatePin: 1,
                },
            });

            tl.to(frameIndex, {
                current: frameCount - 1,
                snap: 'current',
                ease: 'none',
                onUpdate: render,
            });
        };

        // Wait for images to load before setting up scroll
        const checkImagesAndSetup = setInterval(() => {
            if (images.current[0]?.complete && images.current[frameCount - 1]?.complete) {
                clearInterval(checkImagesAndSetup);
                render();
                setupScrollAnimation();
            }
        }, 100);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            clearInterval(checkImagesAndSetup);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full"
            style={{ height: '500vh' }} // Adjust for scroll length
        >
            <canvas
                ref={canvasRef}
                className="sticky top-0 left-0 w-full h-screen"
            />

            {!imagesLoaded && (
                <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
                    <div className="text-white text-2xl">Loading frames...</div>
                </div>
            )}
        </div>
    );
}
