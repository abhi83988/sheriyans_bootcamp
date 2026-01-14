'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CanvasFrameSequenceWithLoco() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    const frameCount = 160;
    const images = useRef([]);
    const frameIndex = useRef(0);

    const currentFrame = (index) => {
        const frameNum = String(index + 1).padStart(5, '0');
        return `/images/frame_${frameNum}.avif`;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d', {
            alpha: false,
            desynchronized: true
        });

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

        // Preload all images with progress
        const loadImages = () => {
            let loadedCount = 0;

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);

                img.onload = () => {
                    loadedCount++;
                    setLoadProgress(Math.round((loadedCount / frameCount) * 100));

                    if (loadedCount === frameCount) {
                        setImagesLoaded(true);
                    }
                };

                img.onerror = () => {
                    console.error(`Failed to load frame ${i}`);
                    loadedCount++;
                    setLoadProgress(Math.round((loadedCount / frameCount) * 100));
                };

                images.current[i] = img;
            }
        };

        loadImages();

        // Optimized render function
        const render = () => {
            const img = images.current[Math.round(frameIndex.current)];

            if (img && img.complete) {
                const w = canvas.width / (window.devicePixelRatio || 1);
                const h = canvas.height / (window.devicePixelRatio || 1);

                // Clear canvas
                context.clearRect(0, 0, w, h);

                // Calculate dimensions to cover canvas while maintaining aspect ratio
                const canvasRatio = w / h;
                const imgRatio = img.naturalWidth / img.naturalHeight;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasRatio > imgRatio) {
                    drawWidth = w;
                    drawHeight = w / imgRatio;
                    offsetX = 0;
                    offsetY = (h - drawHeight) / 2;
                } else {
                    drawHeight = h;
                    drawWidth = h * imgRatio;
                    offsetX = (w - drawWidth) / 2;
                    offsetY = 0;
                }

                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        // Wait for images to load before setting up scroll
        const checkImagesAndSetup = setInterval(() => {
            if (images.current[0]?.complete && images.current[frameCount - 1]?.complete) {
                clearInterval(checkImagesAndSetup);
                render();

                // GSAP ScrollTrigger animation - pinned section with frame animation
                gsap.to(frameIndex, {
                    current: frameCount - 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: '+=300%',
                        scrub: 0.5,
                        pin: true,
                        anticipatePin: 1,
                        onUpdate: () => render(),
                    },
                });
            }
        }, 100);

        const handleResize = () => {
            setCanvasSize();
            render();
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            clearInterval(checkImagesAndSetup);
        };
    }, []);

    return (
        <>
            {!imagesLoaded && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
                    <div className="text-white text-3xl mb-4">Loading Animation</div>
                    <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                            style={{ width: `${loadProgress}%` }}
                        />
                    </div>
                    <div className="text-white text-xl mt-4">{loadProgress}%</div>
                </div>
            )}

            <div
                ref={containerRef}
                className="relative w-full h-screen overflow-hidden"
            >
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                />
            </div>
        </>
    );
}
