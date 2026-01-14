'use client';

export default function VideoSection() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="h-screen w-full object-cover"
                autoPlay
                loop
                playsInline
                muted
                src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/horizontal.mp4"
            />
        </div>
    );
}
