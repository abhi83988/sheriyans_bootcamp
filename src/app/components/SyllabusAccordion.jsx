'use client';

import { useState } from 'react';

export default function SyllabusAccordion() {
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleItem = (index) => {
        setExpandedItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const syllabusData = [
        {
            title: 'Web Development',
            sections: [
                {
                    heading: 'Frontend Development',
                    items: [
                        'HTML, CSS, JavaScript',
                        'Sass / Scss',
                        'Responsive Design',
                        'Event Handling',
                        'Browser APIs (Storage, Fetch, Geolocation)',
                        'Object-Oriented Programming (OOP)',
                        'Advanced Concepts (Throttling, Debouncing, JSON)',
                        'Typescript'
                    ]
                },
                {
                    heading: 'React JS',
                    items: [
                        'Introduction to React and Components',
                        'JSX and Virtual DOM',
                        'Event Handling',
                        'Styling in React',
                        'React Router',
                        'State Management with Redux',
                        'Performance Optimization',
                        'Deploying React Projects',
                        'SEO Basics'
                    ]
                },
                {
                    heading: 'Backend Development',
                    items: [
                        'Introduction and Setup',
                        'Express.js Framework',
                        'MongoDB (Setup, CRUD Operations)',
                        'REST API Principles',
                        'Security (Rate Limiting, XSS, CSRF)',
                        'Authentication Methods (JWT, Passport.js)',
                        'WebSockets and Socket.io',
                        'Caching Strategies',
                        'Redis Integration',
                        'Error Handling Middleware'
                    ]
                }
            ]
        },
        {
            title: 'Advance Frontend',
            sections: [
                {
                    heading: 'Three JS',
                    items: [
                        'Understanding what is Scene.',
                        'Using 3d models for animation.',
                        'Controlling view with Orbit controls.',
                        'Applying Lights inside the scene.',
                        'Understanding different types of Cameras.',
                        'Animating the mesh with GSAP or Framer motion.',
                        'Different types Geometries.',
                        'Using different Materials for animation.'
                    ]
                }
            ]
        },
        {
            title: 'Version Control',
            sections: [
                {
                    heading: 'Git & Github',
                    items: [
                        'Git and GitHub Fundamentals',
                        'Branching and Merging',
                        'Collaboration Workflow'
                    ]
                }
            ]
        },
        {
            title: 'AI and Generative AI',
            sections: [
                {
                    heading: 'Generative AI',
                    items: [
                        'Overview of Generative AI',
                        'Building Applications with Generative AI',
                        'Agentic-AI application',
                        'Working with multi-agent systems'
                    ]
                },
                {
                    heading: 'Applications of AI',
                    items: [
                        'MCP Servers',
                        'Building Applications with Generative AI',
                        'LangChain for Generative AI',
                        'Real-world project implementations (end-to-end AI workflows)'
                    ]
                }
            ]
        },
        {
            title: 'Cloud & DevOps',
            sections: [
                {
                    heading: 'Cloud Fundamentals',
                    items: [
                        'Basics of cloud computing.',
                        'AWS, Azure, and GCP overview.',
                        'Serverless concepts.',
                        'Storage & compute services.'
                    ]
                },
                {
                    heading: 'DevOps Foundations',
                    items: [
                        'CI/CD pipelines.',
                        'Docker & containerization.',
                        'Monitoring & logging.',
                        'Version control best practices.'
                    ]
                }
            ]
        },
        {
            title: 'System Design',
            sections: [
                {
                    heading: 'System Design',
                    items: [
                        'Requests & Responses',
                        'Latency',
                        'Throughput',
                        'Load Balancing',
                        'Caching',
                        'Vertical Scaling',
                        'Horizontal Scaling',
                        'Databases',
                        'Replication',
                        'Sharding',
                        'Message Queues',
                        'CDN',
                        'Stateless Architecture',
                        'Stateful Architecture',
                        'High Availability',
                        'Monitoring & Observability'
                    ]
                }
            ]
        },
        {
            title: 'Projects You Will Build',
            sections: [
                {
                    heading: 'Frontend Projects',
                    items: [
                        'FunPark - JS + DOM based games and effects project for concept building',
                        'SHERYOS - Web-based operating system',
                        'Affiliate Marketplace - Connecting creators through performance-based affiliate sales',
                        'SHERY-UI - Reusable React component library for consistent and scalable UI design',
                        'ERP System - Centralized platform for business operations, data management, and workflow automation'
                    ]
                },
                {
                    heading: 'Backend Projects',
                    items: [
                        'MOODIFY - AI-based music player that plays music based on emotions',
                        'REDIT - Anonymous community-driven platform for posts, discussions, opinions, and trending content',
                        'HINGE - Dating app matching users through vector-embedded compatibility instead of traditional swiping'
                    ]
                },
                {
                    heading: "There's More",
                    items: [
                        '25+ Minor Projects',
                        '50+ Practice Projects',
                        'Build projects that matter'
                    ]
                }
            ]
        },
        {
            title: '<span class="font-bold">Bonus</span> : DSA With JavaScript',
            sections: [
                {
                    heading: 'Fundamentals',
                    items: [
                        'Control Flow Statements (Conditionals, Loops)',
                        'Pattern Programming',
                        'Time and Space Complexity',
                        'Recursion',
                        'Math Problems and Algorithms'
                    ]
                },
                {
                    heading: 'Object-Oriented Programming',
                    items: [
                        'Constructor Method',
                        'Creating classes and objects',
                        'Understanding this keyword',
                        'Accessing properties and methods inside classes'
                    ]
                },
                {
                    heading: 'Strings in JavaScript',
                    items: [
                        'String basics and manipulation',
                        'String methods: concat(), slice(), substring(), replace(), replaceAll()',
                        'Searching methods: indexOf(), lastIndexOf(), includes()',
                        'Transformations: toUpperCase(), toLowerCase(), trim()',
                        'String splitting and joining: split(), join()'
                    ]
                },
                {
                    heading: 'Data Structure',
                    items: [
                        'Arrays (1-D, Multi-D)',
                        'Strings',
                        'Linked Lists',
                        'Stacks and Queues',
                        'Trees',
                        'Hashing (Sets and Maps)'
                    ]
                },
                {
                    heading: 'Algorithms',
                    items: [
                        'Searching Algorithms (Binary Search)',
                        'Sliding Window / Two-Pointer Technique',
                        'Hashing',
                        'Backtracking',
                        'Trees',
                        'Hashing (Sets and Maps)'
                    ]
                },
                {
                    heading: 'Advance DSA',
                    items: [
                        'Understanding Heap data structure',
                        'Binary Search Tree',
                        'Graphs',
                        'Segment Tree',
                        'Trie (Prefix Tree)',
                        'Dynamic Programming (DP)'
                    ]
                }
            ]
        },
        {
            title: '<span class="font-bold">Bonus</span> : Aptitude & Reasoning',
            sections: [
                {
                    heading: 'Quantitive Aptitude',
                    items: [
                        'Percentage',
                        'Simple Interest',
                        'Ratio and Proportion',
                        'HCF and LCM',
                        'Work and Time',
                        'Speed, Distance, and Time',
                        'Boats and Streams.',
                        'Probability',
                        'Geometric Progression (GP)',
                        'Clocks'
                    ]
                },
                {
                    heading: 'Logical Reasoning',
                    items: [
                        'Direction Sense',
                        'Blood Relation',
                        'Syllogism',
                        'Arrangements',
                        'Series'
                    ]
                },
                {
                    heading: 'Verbal Reasoning',
                    items: [
                        'Sentence Ordering',
                        'Error Identification',
                        'Sentence Improvement'
                    ]
                }
            ]
        }
    ];

    return (
        <div className="w-full flex flex-col items-center text-white py-20 bg-black">
            {/* Heading Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                    What You'll Study
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400">
                    Five Months Of Structured, Practical Engineering
                </p>
            </div>

            <div className="w-full max-w-5xl px-4">
                {syllabusData.map((item, index) => (
                    <div
                        key={index}
                        className="item border-b py-6 border-white/10 w-full mx-auto flex flex-col gap-3"
                    >
                        <button
                            type="button"
                            onClick={() => toggleItem(index)}
                            className="flex w-full justify-between items-center cursor-pointer"
                        >
                            <div className="flex gap-4 items-center text-left">
                                <div className="rounded-sm border border-purple-600 bg-zinc-900 p-1.5 w-3 h-3"></div>
                                <h1
                                    className="font-normal text-xl lg:text-2xl md:text-2xl"
                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                />
                            </div>
                            <h2 className="flex items-center font-normal gap-2 text-base lg:text-lg">
                                Expand
                                <span
                                    className={`transition-transform duration-200 ${expandedItems.includes(index) ? 'rotate-90' : 'rotate-0'
                                        }`}
                                >
                                    ▼
                                </span>
                            </h2>
                        </button>

                        <div
                            className={`overflow-hidden md:mt-2 text-left transition-all duration-700 ${expandedItems.includes(index)
                                ? 'max-h-[5000px] opacity-100'
                                : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-2 lg:px-6">
                                {item.sections.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="md:mb-6 py-2 ml-6 lg:mb-2">
                                        <h2 className="font-light text-[1.3rem] mb-2 lg:mb-3 md:text-2xl lg:text-xl">
                                            {section.heading}
                                        </h2>
                                        <div className="bullets text-sm md:text-xl lg:text-base opacity-50">
                                            <ul className="list-none list-inside space-y-1">
                                                {section.items.map((point, pointIndex) => (
                                                    <li key={pointIndex} className="font-light">
                                                        {point}
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

                <button className="shadow-[0_4px_8px_0px_rgba(244,244,254,0.25)_inset] border-[0.4px] backdrop-blur-2xl border-white/20 w-fit px-8 py-3 md:px-12 md:py-4 text-sm lg:px-10 mt-16 lg:py-3 lg:text-base md:text-lg rounded-full mx-auto cursor-pointer hover:bg-white/5 transition-all duration-300">
                    View Complete Syllabus
                </button>
            </div>
        </div >
    );
}
