import Age from "../../utils/Age";
import React from "react";

export function Header() {
    return (
        <div
            className="
                        hover:cursor-crosshair
                          text-white
                          text-4xl
                          font-bold
                          p-5
                          pb-20
                          rounded-xl
                          shadow-xl
                          bg-gradient-to-r
                          from-indigo-500/5
                          via-purple-500/5
                          to-pink-500/5
                          border
                          border-white/20
                          backdrop-blur-lg
                          hover:from-indigo-500/20
                          hover:to-blue-500/20
                          transition-all
                          duration-300
                          ease-out
                        "
        >

            <div>
                Ferdinand Strobel
            </div>


            <div className="text-sm text-white/60">
                <a className="hover:underline hover:text-blue-500" href="https://github.com/FerdiStro"
                   rel="noreferrer">@FerdiStro</a> · <Age birthDate="2005-03-28"></Age> · he/him
            </div>

            <div className="text-sm text-white/60">
                📍 Vienna

            </div>

            {/*About*/}

            <div className="text-sm text-white/60 m-5">
                Hey, I’m Ferdi, 20 years old, currently living in Vienna. I am a software engineer with a passion for
                video games and many self-driven projects. I’m also a huge fan of music and sports. In my free time, I
                enjoy boxing and bouldering, and sometimes I perform as a DJ. <br/><br/>

                Welcome to my portfolio homepage! Here you can find important information about me and all of my
                projects. If you have any questions regarding me or my work, feel free to contact me via LinkedIn,
                GitHub, or email at ferdistr08@gmail.com<br/>


            </div>


            {/* Social Media Badges*/}
            <div className="text-sm  mt-3 text-white/60">
                <a className="inline m-2" href="http://www.linkedin.com/in/ferdinand-strobel-9a53a5223">
                    <img
                        className="inline"
                        src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff"
                        alt="LinkedIn Badge"/>
                </a>
                <a className="inline" href="https://github.com/FerdiStro">
                    <img
                        className="inline"
                        src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"
                        alt="GitHub Badge"/>
                </a>
            </div>

        </div>

    )
}