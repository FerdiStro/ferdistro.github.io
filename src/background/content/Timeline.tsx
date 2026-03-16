import React from "react";

interface Job {
    company: string;
    role: string;
    period: string;
    duration?: string;
    location: string;
    description: string;
    link: string;
    linkLabel: string;
    logo: string;
    tags: string[];
    current?: boolean;
}

const jobs: Job[] = [
    {
        company: "Open200",
        role: "Backend Developer",
        period: "09.2025 – Present",
        location: "Vienna",
        description: "Kotlin/Java backend developer working with event-driven design and microservices. Currently learning AxonIQ and event sourcing across diverse and dynamic projects.",
        link: "https://www.linkedin.com/company/open200",
        linkLabel: "@open200",
        logo: "/assets/open200_logo.png",
        tags: ["Kotlin", "Java", "AxonIQ", "Event Sourcing", "Microservices"],
        current: true,
    },
    {
        company: "Infront",
        role: "Backend Developer",
        period: "09.2021 – 09.2025",
        duration: "4 Years 1 Month",
        location: "Frankfurt / Rimpar",
        description: "Trading and stock market systems built with Java and Spring Boot in a microservices environment. Developed REST and gRPC services and worked extensively with the FIX protocol.",
        link: "https://www.linkedin.com/company/infront-as",
        linkLabel: "@Infront",
        logo: "/assets/infront_logo.png",
        tags: ["Java", "Spring Boot", "gRPC", "FIX Protocol", "REST", "Microservices"],
    },
];

export function Timeline() {
    return (
        <div className="mt-4 mb-12">
            <div className="text-3xl font-bold mb-10 tracking-wide">Timeline</div>

            <div className="relative">
                <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-purple-400/60 via-white/20 to-white/5"/>

                <div className="space-y-6">
                    {jobs.map((job) => (
                        <div key={job.company} className="relative pl-10">
                            <div className={`absolute left-[10px] top-[22px] w-[12px] h-[12px] rounded-full border-2 shadow-lg ${
                                job.current
                                    ? 'bg-purple-400 border-purple-300 shadow-purple-500/50'
                                    : 'bg-white/30 border-white/40'
                            }`}/>

                            <div className="rounded-2xl border border-white/10 backdrop-blur-md
                                bg-gradient-to-br from-white/5 via-indigo-950/20 to-white/2
                                p-5 md:p-6
                                transition-all duration-300 ease-out
                                hover:border-white/25 hover:from-white/8 hover:shadow-xl hover:shadow-purple-900/20">

                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap mb-1">
                                            <span className="text-lg font-semibold text-white">{job.company}</span>
                                            {job.current && (
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/25 border border-purple-400/30 text-purple-300 font-medium">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-sm text-white/55 font-medium">{job.role}</div>
                                    </div>
                                    <img
                                        src={job.logo}
                                        alt={`${job.company} logo`}
                                        className="w-11 h-11 object-contain opacity-75 shrink-0 rounded-lg"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/45 mb-4 border-t border-white/8 pt-4">
                                    <span className="font-medium text-white/60">{job.period}</span>
                                    {job.duration && <span>{job.duration}</span>}
                                    <span>📍 {job.location}</span>
                                    <a
                                        href={job.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
                                    >
                                        {job.linkLabel}
                                    </a>
                                </div>

                                <p className="text-sm text-white/60 leading-relaxed mb-4">{job.description}</p>

                                <div className="flex flex-wrap gap-1.5">
                                    {job.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
