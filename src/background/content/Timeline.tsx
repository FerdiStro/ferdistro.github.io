import React from "react";

export function Timeline() {


    return (
        <div className="mt-10 ">

            <div className="text-4xl mb-11 ">
                Timeline
            </div>


            <div className="p-4 broder-2 border-white backdrop-blur-lg transition-all
             hover:cursor-crosshair
                          duration-300
                          ease-out
                          hover:scale-95
               rounded-xl
               shadow-xl

                        bg-gradient-to-r
                    from-green-500/40
                    via-purple-500/30
                          to-indigo-500/10

                  "
            >

                <div className=" border-2  border-white/20 p-2 shadow-xl mb-3 rounded">
                    Infront
                    <div className=" ml-2 inline text-xs text-white/50">
                        Backend Developer (Java)
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="w-20 h-20 mr-4">
                        <img src="/assets/infront_logo.png" alt="Infront Logo"/>
                    </div>
                    <div className="text-sm w-64">
                        <div className=" text-white">
                            09.2021 - 09.2025
                        </div>
                        <div className="text-sm  text-white/70">
                            4 Years 1 Month
                        </div>
                        <div className="text-sm  text-white/70">
                            📍 Frankfurt/ Rimpar
                        </div>
                        <div className="text-sm text-white/60">
                            <a className="hover:underline hover:text-blue-500"
                               href="https://www.linkedin.com/company/infront-as"
                               rel="noreferrer">@Infront</a>
                        </div>
                    </div>

                    <div className="text-sm  ml-20">
                        Description:
                        <div className="text-sm text-white/70">
                            I started my career in the business world, working in trading and the stock market with Java
                            and Spring Boot in a microservices environment. I developed REST and gRPC services and
                            worked extensively with the FIX protocol, fixing and improving trading interfaces. </div>
                    </div>
                </div>


            </div>

            <div className="bg-white h-2 w-2 m-3 rounded-full"/>
            <div className="bg-white h-2 w-2 m-3 rounded-full"/>
            <div className="bg-white h-2 w-2 m-3 rounded-full"/>

            <div className="p-4 broder-2 mb-5 border-white backdrop-blur-lg transition-all
             hover:cursor-crosshair
                          duration-300
                          ease-out
                          hover:scale-95
               rounded-xl
               shadow-xl

                        bg-gradient-to-r
                    from-green-500/40
                    via-purple-500/30
                          to-indigo-500/10

                  "
            >

                <div className=" border-2  border-white/20 p-2 shadow-xl mb-3 rounded">
                    Open200
                    <div className=" ml-2 inline text-xs text-white/50">
                        Backend Developer (Kotlin/Java)
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="w-20 h-20 mr-4">
                        <img src="/assets/open200_logo.png" alt="Open200 Logo"/>
                    </div>
                    <div className="text-sm w-64">
                        <div className=" text-white">
                            09.2025 - Now
                        </div>

                        <div className="text-sm  text-white/70">
                            📍Vienna
                        </div>
                        <div className="text-sm text-white/60">
                            <a className="hover:underline hover:text-blue-500"
                               href="https://www.linkedin.com/company/open200"
                               rel="noreferrer">@open200_softwarecompany</a>
                        </div>
                    </div>

                    <div className="text-sm  ml-20">
                        Description:
                        <div className="text-sm text-white/70">
                            I continued my journey as a backend developer in Vienna, starting at Open200 as a
                            Kotlin/Java backend developer. I was introduced to event-driven design combined with a
                            microservices architecture and am currently learning AxonIQ and event sourcing. I work on
                            many projects with diverse tech stacks, which keeps the work really dynamic and challenging.
                        </div>
                    </div>
                </div>


            </div>

        </div>

    )
}
