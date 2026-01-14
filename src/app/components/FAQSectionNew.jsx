'use client';

import React from 'react';

const FAQSectionNew = () => {
    const faqs = [
        {
            question: "Are there any projects in this course?",
            answer: "Yes, this course includes multiple AI-focused projects, which will be covered progressively. Detailed information can be found in the syllabus section above."
        },
        {
            question: "Is the course live?",
            answer: "Yes, every session is live and interactive. You'll be learning directly from mentors in real time so you can ask questions, get feedback, and actually understand what you're building instead of just following along blindly."
        },
        {
            question: "How long will I have access to this course?",
            answer: "You'll get full access to the course content and recordings for 2 years after enrollment. Plenty of time to revisit lessons, revise concepts, and rewatch sessions at your own pace."
        },
        {
            question: "What projects will I work on during the course?",
            answer: "Expect to build real, resume-worthy projects like dynamic websites, REST APIs, real-time apps, and even AI-integrated tools. The goal is to make sure you graduate with a stack of deployable work that speaks for you in interviews."
        },
        {
            question: "What if I miss a live session?",
            answer: "No worries. Every live session is recorded and automatically uploaded after class. You can access the recordings anytime to catch up so missing a day won't mean missing out."
        }
    ];

    return (
        <div className="bg-black text-white w-full px-6 md:px-14 py-20">
            {/* Heading */}
            <h1 className="font-[bwGrad-m] text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] text-left !px-0">
                Frequently <span className="accent text-[#9685fe]">Asked Questions</span>
            </h1>

            {/* FAQ Items */}
            <div className="mt-10">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/20 py-5 group">
                        <h1 className="text-2xl md:text-3xl font-[bwGrad-m] text-white group-hover:text-accent transition-colors duration-300">
                            {faq.question}
                        </h1>
                        <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-96 opacity-100 mt-4">
                            <p className="text-lg md:text-lg font-[bwGrad-l] text-white/70 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSectionNew;
