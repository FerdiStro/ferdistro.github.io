import React, {useEffect, useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

import * as THREE from 'three'

import {useGLTF} from '@react-three/drei'

function Asteroid() {
    const {scene} = useGLTF('/models/asteroid.glb')
    const asteroidRef = useRef<THREE.Object3D>(null)

    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1
            const y = -(event.clientY / window.innerHeight) * 2 + 1
            setMouse({ x, y })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useFrame(() => {
        if (asteroidRef.current) {
            asteroidRef.current.rotation.x += (mouse.y * 0.5 - asteroidRef.current.rotation.x) * 0.05
            asteroidRef.current.rotation.y += (mouse.x * 0.5 - asteroidRef.current.rotation.y) * 0.05
        }
    })

    return <primitive ref={asteroidRef} object={scene} scale={0.25} position={[0, -0.5, 0]}/>
}

export default function BackgroundScene() {
    return (
        <Asteroid/>
    )
}


