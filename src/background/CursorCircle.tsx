import React, {useEffect, useRef, useState} from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import * as THREE from 'three'

export function CursorCircle() {
    const {viewport} = useThree()
    const [mouse, setMouse] = useState({x: 0, y: 0})
    const meshRef = React.useRef<THREE.Mesh>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = ((e.clientX + window.scrollX) / window.innerWidth) * 2 - 1;
            const y = (-(e.clientY + window.scrollY) / window.innerHeight) * 2 + 1;
            setMouse({x, y});
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.x += ((mouse.x * viewport.width) / 2 - meshRef.current.position.x) * 0.2
            meshRef.current.position.y += ((mouse.y * viewport.height) / 2 - meshRef.current.position.y) * 0.2
        }
    })

    return (
        <mesh ref={meshRef}>
            <circleGeometry args={[0.06, 64]}/>
            <meshStandardMaterial color="white" transparent opacity={0.5}/>
        </mesh>
    )
}
