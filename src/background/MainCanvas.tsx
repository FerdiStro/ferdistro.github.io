import {Canvas} from "@react-three/fiber";
import BackgroundScene from "./BackgroundScene";
import {CursorCircle} from "./CursorCircle";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Tools} from "./content/Tools";
import {Header} from "./content/Header";
import {Projects} from "./content/Projects";
import {Timeline} from "./content/Timeline";

export function MainCanvas() {
    const isMobile = useMemo(() => navigator.maxTouchPoints > 0, []);
    const [showPermissionBtn, setShowPermissionBtn] = useState(() => {
        if (!isMobile) return false;
        try {
            return typeof (DeviceOrientationEvent as any).requestPermission === 'function';
        } catch {
            return false;
        }
    });

    const inputRef = useRef({x: 0, y: 0});

    useEffect(() => {
        if (isMobile) return;
        const h = (e: MouseEvent) => {
            inputRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            inputRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', h);
        return () => window.removeEventListener('mousemove', h);
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile) return;
        const h = (e: DeviceOrientationEvent) => {
            if (e.gamma === null || e.beta === null) return;
            inputRef.current.x = Math.max(-1, Math.min(1, e.gamma / 45));
            inputRef.current.y = Math.max(-1, Math.min(1, (e.beta - 45) / 45));
        };
        window.addEventListener('deviceorientation', h);
        return () => window.removeEventListener('deviceorientation', h);
    }, [isMobile]);

    const requestIosTilt = async () => {
        try {
            await (DeviceOrientationEvent as any).requestPermission();
            setShowPermissionBtn(false);
        } catch (_) {}
    };

    return (
        <div className="min-h-screen w-full text-white">
            <div className="fixed inset-0 -z-10 bg-[#0a0f1e]"/>

            <Canvas
                style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}
                gl={{alpha: false}}
            >
                <color attach="background" args={['#0a0f1e']}/>
                <ambientLight intensity={0.8}/>
                <directionalLight position={[0, 0, 1]}/>
                <BackgroundScene inputRef={inputRef}/>
                {!isMobile && <CursorCircle/>}
            </Canvas>

            <div style={{position: 'relative', zIndex: 10}}>
                <div className="w-full md:w-2/4 p-4 md:p-10">
                    <Header/>
                </div>

                <div className="w-full md:w-3/4 md:relative md:left-1/4">
                    <Tools/>
                </div>

                <div className="
                    w-full mt-8 md:mt-20 p-4 md:p-8 pb-16
                    border-t border-white/10
                    backdrop-blur-lg
                    bg-gradient-to-b from-[#0a0f1e]/60 via-indigo-950/30 to-[#0a0f1e]/80
                ">
                    <Timeline/>
                    <Projects/>
                </div>
            </div>

            {showPermissionBtn && (
                <button
                    onClick={requestIosTilt}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 px-6 py-3 rounded-full text-sm text-white bg-gradient-to-r from-indigo-500/40 to-purple-500/40 border border-white/20 backdrop-blur-lg"
                >
                    Enable tilt controls
                </button>
            )}
        </div>
    );
}
