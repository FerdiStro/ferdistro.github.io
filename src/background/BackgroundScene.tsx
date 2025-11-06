import React, {useEffect, useRef, useState} from 'react'
import {useFrame, useLoader, useThree} from '@react-three/fiber'

import * as THREE from 'three'

import {useGLTF} from '@react-three/drei'
import {TextureLoader} from "three";

function Asteroid() {
    const {scene} = useGLTF('/models/asteroid.glb')
    const asteroidRef = useRef<THREE.Object3D>(null)

    const [mouse, setMouse] = useState({x: 0, y: 0})

    const passiveRotation = useRef(0);

    //Mouse Rotation
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1
            const y = -(event.clientY / window.innerHeight) * 2 + 1
            setMouse({x, y})
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])


    // Passive Rotation
    useEffect(() => {
        const interval = setInterval(() => {
            passiveRotation.current += 0.001;
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useFrame(() => {
        if (asteroidRef.current) {
            asteroidRef.current.rotation.x += (mouse.y * 0.5 - asteroidRef.current.rotation.x) * 0.01
            asteroidRef.current.rotation.y += (mouse.x * 0.5 - asteroidRef.current.rotation.y) * 0.05

            asteroidRef.current.rotation.y += passiveRotation.current;
        }


    })
    console.log(window.innerWidth)

    return <primitive ref={asteroidRef} object={scene} scale={0.25} position={[window.innerWidth/ 1000 , window.innerHeight/ 1000, 0]}/>
}

function StarBackground() {
    const texture = useLoader(TextureLoader, "/models/star_background.png");
    const { viewport } = useThree();

    return (
        <mesh position={[0, 0, -5]}>
            <planeGeometry args={[viewport.width + 20, viewport.height  + 20]} />
            <meshBasicMaterial
                map={texture}
                transparent
                opacity={0.3}
                toneMapped={false}
            />
        </mesh>
    );
}

export default function BackgroundScene() {
    return (
        <>
            <Asteroid/>
            <StarBackground/>
        </>

    )
}


