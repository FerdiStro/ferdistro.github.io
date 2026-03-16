interface ProjectCard {
    name: string;
    description: string;
    language: string;
    stars: number;
    repoUrl: string;
    tags: string[];
}

const projects: ProjectCard[] = [
    {
        name: "spring-postman-request-generator",
        description: "IntelliJ Plugin that generates Postman collections from Spring REST annotations.",
        language: "Kotlin",
        stars: 4,
        repoUrl: "https://github.com/FerdiStro/spring-postman-request-generator",
        tags: ["IntelliJ Plugin", "Spring", "Postman"],
    },
    {
        name: "CDJ-BeatBoxer",
        description: "Drum machine synchronized to Pioneer CDJs via ProDJ Link protocol.",
        language: "Rust",
        stars: 1,
        repoUrl: "https://github.com/FerdiStro/CDJ-BeatBoxer",
        tags: ["Rust", "ProDJ Link", "Audio"],
    },
    {
        name: "JetBrainsMarketplaceBadge",
        description: "Badge generator for JetBrains Marketplace plugin download and version stats.",
        language: "Rust",
        stars: 0,
        repoUrl: "https://github.com/FerdiStro/JetBrainsMarketplaceBadge",
        tags: ["Rust", "JetBrains", "Badge"],
    },
    {
        name: "plant-grower",
        description: "Full-stack IoT plant monitor: Spring Boot backend, Angular frontend, ESP32 firmware.",
        language: "Java / TypeScript / C++",
        stars: 0,
        repoUrl: "https://github.com/FerdiStro/plant-grower-springboot",
        tags: ["IoT", "Spring Boot", "Angular", "ESP32"],
    },
];

export function Projects() {
    return (
        <div className="mt-10">
            <div>Projects</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="block p-4 rounded-xl shadow-xl border border-white/20 backdrop-blur-lg
                            bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5
                            hover:from-indigo-500/20 hover:to-blue-500/20
                            transition-all duration-300 ease-out hover:scale-[1.02] hover:cursor-pointer"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-base font-semibold text-white truncate">{project.name}</span>
                            <span className="text-xs text-white/60 ml-2 shrink-0">★ {project.stars}</span>
                        </div>
                        <p className="text-sm text-white/70 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs text-white/60 border border-white/20 rounded px-2 py-0.5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="text-xs text-white/40">{project.language}</div>
                    </a>
                ))}
            </div>
        </div>
    );
}
