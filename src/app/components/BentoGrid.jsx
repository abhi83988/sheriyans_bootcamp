'use client';

export default function BentoGrid() {
    return (
        <div className="relative z-0 pt-16 bg-black">
            {/* Purple Glow Effect */}
            <div className="h-full hidden md:block w-full absolute left-0 z-[-1]">
                <div
                    className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]"
                    style={{
                        background: 'radial-gradient(circle, rgb(150, 133, 254) 0%, transparent 80%)',
                        filter: 'drop-shadow(0 0 20px rgba(150, 133, 254, 0.25)) drop-shadow(0 0 40px rgba(150, 133, 254, 0.38))',
                        opacity: 0.19
                    }}
                />
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:pt-20 lg:h-[140vh] w-[90%] gap-4 z-0 pointer-events-none relative mx-auto lg:[grid-template-rows:repeat(8,1fr)] md:[grid-template-rows:repeat(5,1fr)]">

                {/* MiniHack */}
                <div className="lg:row-span-2 lg:col-start-2 text-white backdrop-blur-2xl flex items-center justify-center p-px rounded-xl pointer-events-none">
                    <div className="h-full purpleShadow w-full rounded-xl bg-black/40">
                        <div className="md:h-full h-[10rem] text-[4.5vw] w-full p-5 md:p-10 lg:p-8 relative">
                            <h1 className="md:text-4xl leading-snug lg:leading-normal lg:text-3xl font-normal">
                                MiniHack
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="lg:row-span-4 overflow-hidden col-span-2 lg:h-auto aspect-auto object-center -order-1 row-span-2 pointer-events-none lg:row-start-3 lg:col-start-2 lg:col-span-1 text-white flex items-center justify-center p-px backdrop-blur-2xl rounded-xl">
                    <video
                        className="h-full w-full object-cover rounded-xl"
                        autoPlay
                        playsInline
                        loop
                        muted
                        src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/handbrake.mp4"
                    />
                </div>

                {/* Debug Battles */}
                <div className="lg:row-span-2 lg:row-start-7 lg:col-start-2 text-white flex items-center justify-center p-px backdrop-blur-2xl rounded-xl pointer-events-none">
                    <div className="h-full purpleShadow w-full rounded-xl bg-black/40">
                        <div className="md:h-full h-[10rem] text-[4.5vw] w-full p-5 md:p-10 lg:p-8 relative">
                            <h1 className="md:text-4xl leading-snug lg:leading-normal lg:text-3xl font-normal">
                                Debug battles
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Peer Code Reviews */}
                <div className="lg:row-span-2 lg:row-start-3 lg:col-start-1 text-white flex items-center justify-center p-px backdrop-blur-2xl rounded-xl pointer-events-none">
                    <div className="h-full purpleShadow w-full rounded-xl bg-black/40">
                        <div className="md:h-full h-[10rem] text-[4.5vw] w-full p-5 md:p-10 lg:p-8 relative">
                            <h1 className="md:text-4xl leading-snug lg:leading-normal lg:text-3xl font-normal">
                                Peer Code Reviews
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Tech Masterclasses */}
                <div className="lg:row-span-2 lg:row-start-3 lg:col-start-3 text-white flex items-center justify-center p-px backdrop-blur-2xl rounded-xl pointer-events-none">
                    <div className="h-full purpleShadow w-full rounded-xl bg-black/40">
                        <div className="md:h-full h-[10rem] text-[4.5vw] w-full p-5 md:p-10 lg:p-8 relative">
                            <h1 className="md:text-4xl leading-snug lg:leading-normal lg:text-3xl font-normal">
                                Tech Masterclasses
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Mock Interviews */}
                <div className="lg:row-span-2 lg:row-start-5 lg:col-start-1 text-white flex items-center justify-center p-px backdrop-blur-2xl rounded-xl pointer-events-none">
                    <div className="h-full purpleShadow w-full rounded-xl bg-black/40">
                        <div className="md:h-full h-[10rem] text-[4.5vw] w-full p-5 md:p-10 lg:p-8 relative">
                            <h1 className="md:text-4xl leading-snug lg:leading-normal lg:text-3xl font-normal">
                                Mock Interviews
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Show & Tell Fridays */}
                <div className="lg:row-span-2 lg:row-start-5 lg:col-start-3 text-white flex items-center justify-center p-px backdrop-blur-2xl rounded-xl pointer-events-none">
                    <div className="h-full purpleShadow w-full rounded-xl bg-black/40">
                        <div className="md:h-full h-[10rem] text-[4.5vw] w-full p-5 md:p-10 lg:p-8 relative">
                            <h1 className="md:text-4xl leading-snug lg:leading-normal lg:text-3xl font-normal">
                                Show & Tell Fridays
                            </h1>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                .purpleShadow {
                    border: 1.5px solid rgba(150, 133, 254, 0.38);
                    box-shadow: inset 13px 20px 36.6px rgba(150, 133, 254, 0.25),
                                inset -13px -20px 35.6px rgba(150, 133, 254, 0.25);
                }
            `}</style>
        </div>
    );
}
