'use client';

import React, { useState } from 'react';

const SyllabusSection = () => {
    const [openItems, setOpenItems] = useState([0]); // First item open by default

    const toggleItem = (index) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const syllabusData = [
        {
            title: "Web Development",
            sections: [
                {
                    subtitle: "Frontend Development",
                    items: [
                        "HTML, CSS, JavaScript",
                        "Sass / Scss",
                        "Responsive Design",
                        "Event Handling",
                        "Browser APIs (Storage, Fetch, Geolocation)",
                        "Object-Oriented Programming (OOP)",
                        "Advanced Concepts (Throttling, Debouncing, JSON)",
                        "Typescript"
                    ]
                },
                {
                    subtitle: "React JS",
                    items: [
                        "Introduction to React and Components",
                        "JSX and Virtual DOM",
                        "Event Handling",
                        "Styling in React",
                        "React Router",
                        "State Management with Redux",
                        "Performance Optimization",
                        "Deploying React Projects",
                        "SEO Basics"
                    ]
                },
                {
                    subtitle: "Backend Development",
                    items: [
                        "Introduction and Setup",
                        "Express.js Framework",
                        "MongoDB (Setup, CRUD Operations)",
                        "REST API Principles",
                        "Security (Rate Limiting, XSS, CSRF)",
                        "Authentication Methods (JWT, Passport.js)",
                        "WebSockets and Socket.io",
                        "Caching Strategies",
                        "Redis Integration",
                        "Error Handling Middleware"
                    ]
                }
            ]
        },
        {
            title: "Advance Frontend",
            sections: [
                {
                    subtitle: "Three JS",
                    items: [
                        "Understanding what is Scene.",
                        "Using 3d models for animation.",
                        "Controlling view with Orbit controls.",
                        "Applying Lights inside the scene.",
                        "Understanding different types of Cameras.",
                        "Animating the mesh with GSAP or Framer motion.",
                        "Different types Geometries.",
                        "Using different Materials for animation."
                    ]
                }
            ]
        },
        {
            title: "Version Control",
            sections: [
                {
                    subtitle: "Git & Github",
                    items: [
                        "Git and GitHub Fundamentals",
                        "Branching and Merging",
                        "Collaboration Workflow"
                    ]
                }
            ]
        },
        {
            title: "AI and Generative AI",
            sections: [
                {
                    subtitle: "Generative AI",
                    items: [
                        "Overview of Generative AI",
                        "Building Applications with Generative AI",
                        "Agentic-AI application",
                        "Working with multi-agent systems"
                    ]
                },
                {
                    subtitle: "Applications of AI",
                    items: [
                        "MCP Servers",
                        "Building Applications with Generative AI",
                        "LangChain for Generative AI",
                        "Real-world project implementations (end-to-end AI workflows)"
                    ]
                }
            ]
        },
        {
            title: "Cloud & DevOps",
            sections: [
                {
                    subtitle: "Cloud Fundamentals",
                    items: [
                        "Basics of cloud computing.",
                        "AWS, Azure, and GCP overview.",
                        "Serverless concepts.",
                        "Storage & compute services."
                    ]
                },
                {
                    subtitle: "DevOps Foundations",
                    items: [
                        "CI/CD pipelines.",
                        "Docker & containerization.",
                        "Monitoring & logging.",
                        "Version control best practices."
                    ]
                }
            ]
        },
        {
            title: "System Design",
            sections: [
                {
                    subtitle: "System Design",
                    items: [
                        "Requests & Responses",
                        "Latency",
                        "Throughput",
                        "Load Balancing",
                        "Caching",
                        "Vertical Scaling",
                        "Horizontal Scaling",
                        "Databases",
                        "Replication",
                        "Sharding",
                        "Message Queues",
                        "CDN",
                        "Stateless Architecture",
                        "Stateful Architecture",
                        "High Availability",
                        "Monitoring & Observability"
                    ]
                }
            ]
        },
        {
            title: "Projects You Will Build",
            sections: [
                {
                    subtitle: "Frontend Projects",
                    items: [
                        "FunPark - JS + DOM based games and effects project for concept building",
                        "SHERYOS - Web-based operating system",
                        "Affiliate Marketplace - Connecting creators through performance-based affiliate sales",
                        "SHERY-UI - Reusable React component library for consistent and scalable UI design",
                        "ERP System - Centralized platform for business operations, data management, and workflow automation"
                    ]
                },
                {
                    subtitle: "Backend Projects",
                    items: [
                        "MOODIFY - AI-based music player that plays music based on emotions",
                        "REDIT - Anonymous community-driven platform for posts, discussions, opinions, and trending content",
                        "HINGE - Dating app matching users through vector-embedded compatibility instead of traditional swiping"
                    ]
                },
                {
                    subtitle: "There's More",
                    items: [
                        "25+ Minor Projects",
                        "50+ Practice Projects",
                        "Build projects that matter"
                    ]
                }
            ]
        },
        {
            title: "<span class='font-bold'>Bonus</span> : DSA With JavaScript",
            sections: [
                {
                    subtitle: "Fundamentals",
                    items: [
                        "Control Flow Statements (Conditionals, Loops)",
                        "Pattern Programming",
                        "Time and Space Complexity",
                        "Recursion",
                        "Math Problems and Algorithms"
                    ]
                },
                {
                    subtitle: "Object-Oriented Programming",
                    items: [
                        "Constructor Method",
                        "Creating classes and objects",
                        "Understanding this keyword",
                        "Accessing properties and methods inside classes"
                    ]
                },
                {
                    subtitle: "Strings in JavaScript",
                    items: [
                        "String basics and manipulation",
                        "String methods: concat(), slice(), substring(), replace(), replaceAll()",
                        "Searching methods: indexOf(), lastIndexOf(), includes()",
                        "Transformations: toUpperCase(), toLowerCase(), trim()",
                        "String splitting and joining: split(), join()"
                    ]
                },
                {
                    subtitle: "Data Structure",
                    items: [
                        "Arrays (1-D, Multi-D)",
                        "Strings",
                        "Linked Lists",
                        "Stacks and Queues",
                        "Trees",
                        "Hashing (Sets and Maps)"
                    ]
                },
                {
                    subtitle: "Algorithms",
                    items: [
                        "Searching Algorithms (Binary Search)",
                        "Sliding Window / Two-Pointer Technique",
                        "Hashing",
                        "Backtracking",
                        "Trees",
                        "Hashing (Sets and Maps)"
                    ]
                },
                {
                    subtitle: "Advance DSA",
                    items: [
                        "Understanding Heap data structure",
                        "Binary Search Tree",
                        "Graphs",
                        "Segment Tree",
                        "Trie (Prefix Tree)",
                        "Dynamic Programming (DP)"
                    ]
                }
            ]
        },
        {
            title: "<span class='font-bold'>Bonus</span> : Aptitude & Reasoning",
            sections: [
                {
                    subtitle: "Quantitive Aptitude",
                    items: [
                        "Percentage",
                        "Simple Interest",
                        "Ratio and Proportion",
                        "HCF and LCM",
                        "Work and Time",
                        "Speed, Distance, and Time",
                        "Boats and Streams.",
                        "Probability",
                        "Geometric Progression (GP)",
                        "Clocks"
                    ]
                },
                {
                    subtitle: "Logical Reasoning",
                    items: [
                        "Direction Sense",
                        "Blood Relation",
                        "Syllogism",
                        "Arrangements",
                        "Series"
                    ]
                },
                {
                    subtitle: "Verbal Reasoning",
                    items: [
                        "Sentence Ordering",
                        "Error Identification",
                        "Sentence Improvement"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="bg-black text-white w-full">
            <div className="py-20 flex flex-col items-center gap-3">
                {/* Heading */}
                <h1 className="font-[bwGrad-m] text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] max-md:text-4xl">
                    What You'll Study
                </h1>
                <p className="md:text-3xl px-3 leading-tight mb-10 md:mb-20 text-[1.3rem] lg:text-4xl text-white/40 text-center font-[bwGrad-r] capitalize">
                    Five months of structured, practical engineering
                </p>

                {/* Accordion Container */}
                <div className="container flex flex-col items-center text-white">
                    {syllabusData.map((item, index) => (
                        <div
                            key={index}
                            className="item border-b py-2 border-white/20 w-[90%] mx-auto flex flex-col gap-3 mb-3"
                        >
                            <button
                                type="button"
                                onClick={() => toggleItem(index)}
                                className="flex w-full justify-between items-center cursor-pointer"
                            >
                                <div className="flex gap-4 items-center text-left">
                                    <div className="rounded-sm border border-purple-900 bg-zinc-900 p-1.5"></div>
                                    <h1
                                        className="font-[bwGrad-r] text-[1.5rem] lg:text-3xl md:text-3xl"
                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                    />
                                </div>
                                <h2 className="flex items-center font-[bwGrad-m] gap-1 sm:text-xl lg:text-xl text-sm lg:gap-3">
                                    Expand
                                    <span
                                        className={`transition-transform duration-200 ${openItems.includes(index) ? 'rotate-180' : 'rotate-0'
                                            }`}
                                    >
                                        <i className="ri-arrow-down-s-line text-lg"></i>
                                    </span>
                                </h2>
                            </button>

                            {/* Expandable Content */}
                            <div
                                className={`expandable overflow-hidden md:mt-2 text-left transition-all duration-700 ${openItems.includes(index)
                                    ? 'max-h-[150vh] opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-2 lg:px-6">
                                    {item.sections.map((section, sectionIndex) => (
                                        <div key={sectionIndex} className="md:mb-6 py-2 ml-6 lg:mb-2">
                                            <h2 className="font-[bwGrad-l] text-[1.3rem] mb-2 lg:mb-3 md:text-2xl lg:text-xl">
                                                {section.subtitle}
                                            </h2>
                                            <div className="bullets text-sm md:text-xl lg:text-base opacity-50">
                                                <ul className="list-none list-inside space-y-1">
                                                    {section.items.map((listItem, itemIndex) => (
                                                        <li key={itemIndex} className="font-[bwGrad-l]">
                                                            {listItem}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* View Complete Syllabus Button */}
                    <button
                        className="shadow-md border-[.4px] backdrop-blur-2xl border-white/20 w-fit px-7 py-3 md:px-10 md:py-4 text-sm lg:px-8 mt-10 lg:py-2.5 lg:text-base md:text-2xl rounded-full mx-auto cursor-pointer"
                        style={{
                            boxShadow: 'rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset'
                        }}
                    >
                        View Complete Syllabus
                    </button>
                </div>
            </div>
            );
};

            export default SyllabusSection;
