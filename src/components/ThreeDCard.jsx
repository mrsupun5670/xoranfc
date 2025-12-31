import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, Text, RenderTexture, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const BusinessCard = () => {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);

  // Auto-rotation (slower when hovered)
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * (hovered ? 0.2 : 0.5);
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1} speed={1.5}>
      <group ref={mesh} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
        
        {/* CARD BODY - Rounded Box */}
        <RoundedBox args={[3.2, 2.0, 0.05]} radius={0.1} smoothness={4} castShadow receiveShadow>
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color="#1e293b" // Slate-800
            />
        </RoundedBox>
        
        {/* FRONT FACE CONTENT */}
        <mesh position={[0, 0, 0.026]}> {/* Slightly above surface (0.025) */}
            <planeGeometry args={[3.1, 1.9]} />
            <meshStandardMaterial transparent opacity={1} roughness={0.3} metalness={0.5}>
                <RenderTexture attach="map">
                    <color attach="background" args={['#000000']} />
                    <group>
                        {/* Logo / Banding */}
                        <mesh position={[0, 0.8, -0.1]}>
                            <planeGeometry args={[4, 1]} />
                            <meshBasicMaterial color="#3b82f6" />
                        </mesh>
                        
                        <Text fontSize={0.35} color="white" position={[0, 0.1, 0]} fontStyle="bold">
                            DIGITAL IDENTITY
                        </Text>
                        <Text fontSize={0.12} color="#94a3b8" position={[0, -0.2, 0]} letterSpacing={0.15}>
                            NEXT GEN NETWORKING
                        </Text>
                        
                        <Text fontSize={0.1} color="#3b82f6" position={[0, -0.8, 0]} letterSpacing={0.05}>
                            www.digitalidentity.com
                        </Text>
                    </group>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>

        {/* BACK FACE CONTENT */}
        <mesh position={[0, 0, -0.026]} rotation={[0, Math.PI, 0]}>
             <planeGeometry args={[3.1, 1.9]} />
             <meshStandardMaterial transparent opacity={1} roughness={0.3} metalness={0.5}>
                <RenderTexture attach="map">
                    <color attach="background" args={['#0f172a']} />
                    
                    {/* User Details (Left Side Now) */}
                    <group position={[-0.8, 0, 0]}>
                         <Text fontSize={0.25} color="white" position={[0, 0.2, 0]} anchorX="center" fontStyle="bold">
                            Dasun Bandara
                        </Text>
                        <Text fontSize={0.12} color="#3b82f6" position={[0, -0.15, 0]} anchorX="center" letterSpacing={0.1}>
                            CEO / FOUNDER
                        </Text>
                        <Text fontSize={0.09} color="#94a3b8" position={[0, -0.5, 0]} anchorX="center">
                            +94 76 286 5688
                        </Text>
                    </group>

                    {/* QR Code (Right Side Now) */}
                    <group position={[0.8, 0, 0]}>
                        <mesh position={[0, 0, 0]}>
                            <planeGeometry args={[1.0, 1.0]} />
                            <meshBasicMaterial color="white" />
                        </mesh>
                        <mesh position={[0, 0, 0.01]}>
                            <planeGeometry args={[0.85, 0.85]} />
                            <meshBasicMaterial color="black" /> 
                        </mesh>
                    </group>

                </RenderTexture>
            </meshStandardMaterial>
        </mesh>

      </group>
    </Float>
  );
};

const ThreeDCard = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
        
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Environment for reflections */}
        <Environment preset="city" />

        <BusinessCard />
        
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDCard;
