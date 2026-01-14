'use client';

import React, { useState } from 'react';

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        occupation: '',
        bootcamp: '',
        canCall: '',
        year: '',
        name: '',
        email: '',
        contact: '',
        dob: '',
        education: '',
        institute: '',
        field: '',
        city: '',
        extraToSay: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="bg-black text-white w-full">
            <div
                id="form"
                className="px-4 md:px-14 md:py-28 py-20 flex lg:flex-row flex-col gap-5 md:gap-14 relative justify-between overflow-hidden z-0"
            >
                {/* Video Background Decoration */}
                <div className="aspect-square lg:opacity-100 opacity-0 absolute h-[90vh] top-[-20%] left-[-20%] z-[-1] rounded-full overflow-hidden">
                    <div
                        className="h-full w-full absolute z-1 inset-0"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 70%)'
                        }}
                    />
                    <div className="w-full h-full bg-transparent">
                        <video
                            className="w-full h-full object-cover"
                            src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4"
                            autoPlay
                            loop
                            playsInline
                            muted
                        />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="font-[bwGrad-m] text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] max-sm:!text-[6vw] md:!text-4xl !px-0 lg:w-[40%] text-left capitalize">
                    Hey! We're Happy <span className="accent">to guide you</span> into
                    <span className="accent"> Becoming A Confident Engineer_</span>
                </h1>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="lg:w-1/2 space-y-5 border p-3 md:px-8 md:py-6 border-white/10 rounded-lg"
                >
                    {/* Occupation Radio Buttons */}
                    <div className="w-full space-y-2">
                        <div className="flex items-center flex-wrap gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] text-lg md:text-2xl">Occupation</h1>
                            <div className="option flex gap-4 md:gap-5 flex-wrap font-[bwGrad-r]">
                                {['Student', 'Working', 'GapYear'].map((option, index) => (
                                    <div key={index}>
                                        <input
                                            id={`occupation-${index}`}
                                            className="peer sr-only"
                                            type="radio"
                                            name="occupation"
                                            value={option}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor={`occupation-${index}`}
                                            className="px-6 py-1.5 max-md:text-sm border border-white/30 rounded-full cursor-pointer transition-colors
                               peer-checked:bg-white peer-checked:text-black
                               hover:bg-white hover:text-black"
                                        >
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Choose Bootcamp Dropdown */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-2 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                Choose Bootcamp <span className="accent opacity-60">*</span>
                            </h1>
                            <div className="border border-white/30 rounded-full pl-1 pr-3 py-1">
                                <select
                                    name="bootcamp"
                                    value={formData.bootcamp}
                                    onChange={handleChange}
                                    className="max-sm:w-full w-max p-2 md:py-3 text-sm font-[bwGrad-r] outline-none bg-transparent text-white"
                                >
                                    <option value="" disabled className="bg-black text-white/60">
                                        Select Choose Bootcamp
                                    </option>
                                    <option value="Kodex (Online)" className="bg-black text-white">
                                        Kodex (Online)
                                    </option>
                                    <option value="Kodr (Offline)" className="bg-black text-white">
                                        Kodr (Offline)
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Preferred Call Time Dropdown */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-2 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">Preferred Call Time</h1>
                            <div className="border border-white/30 rounded-full pl-1 pr-3 py-1">
                                <select
                                    name="canCall"
                                    value={formData.canCall}
                                    onChange={handleChange}
                                    className="max-sm:w-full w-max p-2 md:py-3 text-sm font-[bwGrad-r] outline-none bg-transparent text-white"
                                >
                                    <option value="" disabled className="bg-black text-white/60">
                                        Select Preferred Call Time
                                    </option>
                                    {['Anytime', 'Morning', 'Afternoon', 'Evening'].map((time) => (
                                        <option key={time} value={time} className="bg-black text-white">
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Graduation Year Dropdown */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-2 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">Graduation Year</h1>
                            <div className="border border-white/30 rounded-full pl-1 pr-3 py-1">
                                <select
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    className="max-sm:w-full w-max p-2 md:py-3 text-sm font-[bwGrad-r] outline-none bg-transparent text-white"
                                >
                                    <option value="" disabled className="bg-black text-white/60">
                                        Select Graduation Year
                                    </option>
                                    {['1', '2', '3', '4', 'Other'].map((year) => (
                                        <option key={year} value={year} className="bg-black text-white">
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Full Name Input */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                Full Name <span className="accent opacity-60">*</span>
                            </h1>
                            <input
                                placeholder="Enter Full Name"
                                className="w-full p-1 md:p-2 py-1 md:text-lg border-b border-white/30 font-[bwGrad-r] outline-none bg-transparent placeholder:text-white/20 text-white"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                Email <span className="accent opacity-60">*</span>
                            </h1>
                            <input
                                placeholder="Enter Email"
                                className="w-full p-1 md:p-2 py-1 md:text-lg border-b border-white/30 font-[bwGrad-r] outline-none bg-transparent placeholder:text-white/20 text-white"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Contact Number Input */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                Contact Number <span className="accent opacity-60">*</span>
                            </h1>
                            <input
                                placeholder="Enter Contact Number"
                                className="w-full p-1 md:p-2 py-1 md:text-lg border-b border-white/30 font-[bwGrad-r] outline-none bg-transparent placeholder:text-white/20 text-white"
                                type="tel"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Date of Birth Input */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                Date of Birth <span className="accent opacity-60">*</span>
                            </h1>
                            <input
                                placeholder="Enter Date of Birth"
                                className="w-full p-1 md:p-2 py-1 md:text-lg border-b border-white/30 font-[bwGrad-r] outline-none bg-transparent placeholder:text-white/20 text-white"
                                type="text"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Education Input */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                Education <span className="accent opacity-60">*</span>
                            </h1>
                            <input
                                placeholder="Enter Education"
                                className="w-full p-1 md:p-2 py-1 md:text-lg border-b border-white/30 font-[bwGrad-r] outline-none bg-transparent placeholder:text-white/20 text-white"
                                type="text"
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* College Name Input */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                College Name <span className="accent opacity-60">*</span>
                            </h1>
                            <input
                                placeholder="Enter College Name"
                                className="w-full p-1 md:p-2 py-1 md:text-lg border-b border-white/30 font-[bwGrad-r] outline-none bg-transparent placeholder:text-white/20 text-white"
                                type="text"
                                name="institute"
                                value={formData.institute}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Field Of Study Input */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                Field Of Study <span className="accent opacity-60">*</span>
                            </h1>
                            <input
                                placeholder="Enter Field Of Study"
                                className="w-full p-1 md:p-2 py-1 md:text-lg border-b border-white/30 font-[bwGrad-r] outline-none bg-transparent placeholder:text-white/20 text-white"
                                type="text"
                                name="field"
                                value={formData.field}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* City Input */}
                    <div className="w-full space-y-2">
                        <div className="flex md:items-center md:flex-row flex-col gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                City <span className="accent opacity-60">*</span>
                            </h1>
                            <input
                                placeholder="Enter City"
                                className="w-full p-1 md:p-2 py-1 md:text-lg border-b border-white/30 font-[bwGrad-r] outline-none bg-transparent placeholder:text-white/20 text-white"
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Textarea */}
                    <div className="w-full space-y-2">
                        <div className="flex flex-col gap-3 md:gap-5 px-5">
                            <h1 className="font-[bwGrad-r] shrink-0 text-lg md:text-2xl">
                                Anything Else You'd Like to Share
                            </h1>
                            <textarea
                                name="extraToSay"
                                placeholder="Enter Anything Else You'd Like to Share"
                                maxLength="300"
                                value={formData.extraToSay}
                                onChange={handleChange}
                                className="w-full h-20 md:h-32 p-1 md:p-2 py-1 md:text-lg border border-white/20 rounded font-[bwGrad-r] outline-none placeholder:text-white/20 bg-transparent text-white"
                                style={{ boxShadow: 'transparent 0px 0px 0px 1000px inset' }}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="px-5 pt-5">
                        <button
                            type="submit"
                            className="w-max disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <div className="pl-5 md:pl-5 pr-1 md:pr-2 py-1 md:py-2 rounded-full items-center bg-white text-black flex justify-between">
                                <h1 className="text-sm font-[bwGrad-m]">Get a Call Back</h1>
                                <div className="w-10 flex ml-10 items-center justify-center aspect-square rounded-full bg-black text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactFormSection;
