import React, {useEffect, useRef} from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import * as THREE from 'three'

export function CursorCircle() {
    const {viewport} = useThree()
    const mouse = useRef({x: 0, y: 0})
    const meshRef = useRef<THREE.Mesh>(null)

    useEffect(() => {
        const h = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        }
        window.addEventListener('mousemove', h)
        return () => window.removeEventListener('mousemove', h)
    }, [])

    useFrame(() => {
        if (!meshRef.current) return;
        const target = {
            x: (mouse.current.x * viewport.width) / 2,
            y: (mouse.current.y * viewport.height) / 2,
        }
        meshRef.current.position.x += (target.x - meshRef.current.position.x) * 0.15
        meshRef.current.position.y += (target.y - meshRef.current.position.y) * 0.15
    })

    return (
        <mesh ref={meshRef}>
            <circleGeometry args={[0.06, 64]}/>
            <meshStandardMaterial color="white" transparent opacity={0.5}/>
        </mesh>
    )
}
