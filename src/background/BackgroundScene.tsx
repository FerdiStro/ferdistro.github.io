import React, {useEffect, useRef} from 'react'
import {useFrame, useLoader, useThree} from '@react-three/fiber'

import * as THREE from 'three'

import {useGLTF} from '@react-three/drei'
import {TextureLoader} from "three";

interface InputRef {
    current: { x: number; y: number };
}

function Asteroid({inputRef}: { inputRef: InputRef }) {
    const {scene} = useGLTF('/models/asteroid.glb')
    const asteroidRef = useRef<THREE.Object3D>(null)
    const scrollZ = useRef(0);

    useEffect(() => {
        const h = () => {
            const max = document.body.scrollHeight - window.innerHeight;
            scrollZ.current = max > 0 ? window.scrollY / max : 0;
        };
        window.addEventListener('scroll', h, {passive: true});
        return () => window.removeEventListener('scroll', h);
    }, []);

    useFrame(() => {
        const obj = asteroidRef.current;
        if (!obj) return;

        obj.rotation.x += (inputRef.current.y * 1.2 - obj.rotation.x) * 0.04;
        obj.rotation.y += (inputRef.current.x * 1.5 - obj.rotation.y) * 0.04;
        obj.rotation.y += 0.003;

        const baseX = window.innerWidth / 1000;
        const baseY = window.innerHeight / 1000;
        obj.position.x += (baseX + inputRef.current.x * 0.8 - obj.position.x) * 0.04;
        obj.position.y += (baseY + inputRef.current.y * 0.5 - obj.position.y) * 0.04;
        obj.position.z += (-scrollZ.current * 3 - obj.position.z) * 0.03;
    })

    return <primitive ref={asteroidRef} object={scene} scale={0.25} position={[window.innerWidth / 1000, window.innerHeight / 1000, 0]}/>
}

function StarBackground() {
    const texture = useLoader(TextureLoader, "/models/star_background.png");
    const {viewport} = useThree();

    return (
        <mesh position={[0, 0, -5]}>
            <planeGeometry args={[viewport.width + 20, viewport.height + 20]}/>
            <meshBasicMaterial
                map={texture}
                transparent
                opacity={0.3}
                toneMapped={false}
            />
        </mesh>
    );
}

export default function BackgroundScene({inputRef}: { inputRef: InputRef }) {
    return (
        <>
            <Asteroid inputRef={inputRef}/>
            <StarBackground/>
        </>
    )
}
