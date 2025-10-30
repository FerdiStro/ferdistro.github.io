import {Canvas} from "@react-three/fiber";
import BackgroundScene from "./BackgroundScene";
import {CursorCircle} from "./CursorCircle";
import React from "react";

export function MainCanvas() {
    return (

        <div className="bg-gray-600 cursor-none">
            <div className="relative h-screen w-screen">
                <Canvas style={{position: 'absolute', top: 0, left: 0}}>
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[2, 2, 2]}/>
                    <BackgroundScene/>
                    <CursorCircle/>
                </Canvas>

                <div className="" style={{position: 'relative', zIndex: 10, padding: '2rem'}}>
                    <div className="text-white text-4xl rounded-lg p-5 font-bold shadow-lg hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-white/20">
                        Ferdinand Strobel
                    </div>


                </div>
            </div>
        </div>
    )
}