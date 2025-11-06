import {Canvas} from "@react-three/fiber";
import BackgroundScene from "./BackgroundScene";
import {CursorCircle} from "./CursorCircle";
import React from "react";
import {Tools} from "./content/Tools";
import {Header} from "./content/Header";
import {Projects} from "./content/Projects";
import {Timeline} from "./content/Timeline";


export function MainCanvas() {
    return (

        <div className="bg-gray-600 cursor-none">
            <div className="relative h-screen w-screen">
                <Canvas style={{position: 'absolute', top: 0, left: 0}}>
                    <ambientLight intensity={0.8}/>
                    <directionalLight position={[0, 0, 1]}/>
                    <BackgroundScene/>
                    <CursorCircle/>

                </Canvas>

                {/*Header*/}
                <div className="w-2/4 p-10" style={{position: 'relative', zIndex: 10}}>
                    <Header></Header>
                </div>

                {/*Tools*/}
                <div className="w-3/4  relative left-1/4  " style={{position: 'relative', zIndex: 10}}>
                    <Tools></Tools>
                </div>

                <div className="fixed top-0 -z-50 h-full w-full bg-gray-700">
                </div>

                {/*Projects*/}
                <div className="
                    relative top-1/6

                    hover:cursor-text
                    text-white
                    text-2xl
                          font-bold
                          p-5
                          pb-20
                          shadow-xl
                          bg-gradient-to-r
                          via-purple-500/5
                          border
                          border-white/20
                          backdrop-blur-lg
                          from-indigo-500/20
                         to-green-500/20
                          transition-all
                          duration-300
                          ease-out
                          h-full
                          mt-20
                        " style={{position: 'relative', zIndex: 10}}>
                    <Timeline></Timeline>
                    <Projects></Projects>
                </div>
            </div>
        </div>)
}