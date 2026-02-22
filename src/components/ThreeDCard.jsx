import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, Html, ContactShadows, RoundedBox, Image, Text, GradientTexture } from '@react-three/drei';
import * as THREE from 'three';

const BusinessCard = () => {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);

  // Create a custom 2D rounded rectangle shape so we can extrude it.
  // This prevents the "puffing up" thickness bug caused by RoundedBox's full 3D corner radius.
  const cardShape = React.useMemo(() => {
    const shape = new THREE.Shape();
    const width = 3.2;
    const height = 2.0;
    const radius = 0.12; 
    
    // Starting from top left, drawing clockwise
    shape.moveTo(-width/2 + radius, height/2);
    shape.lineTo(width/2 - radius, height/2);
    shape.quadraticCurveTo(width/2, height/2, width/2, height/2 - radius);
    shape.lineTo(width/2, -height/2 + radius);
    shape.quadraticCurveTo(width/2, -height/2, width/2 - radius, -height/2);
    shape.lineTo(-width/2 + radius, -height/2);
    shape.quadraticCurveTo(-width/2, -height/2, -width/2, -height/2 + radius);
    shape.lineTo(-width/2, height/2 - radius);
    shape.quadraticCurveTo(-width/2, height/2, -width/2 + radius, height/2);
    return shape;
  }, []);

  // Minimal floating effect
  useFrame((state, delta) => {
    // We removed manual rotation here so it doesn't fight with user's manual dragging.
    // The Float component provides the gentle up/down bobbing.
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1} speed={1.5}>
      <group ref={mesh} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
        {/* CARD BODY - Custom Extruded Shape to keep it fully flat (0.001) while having rounded X/Y corners */}
        <mesh position={[0, 0, -0.0005]} castShadow receiveShadow>
            <extrudeGeometry args={[cardShape, { depth: 0.001, bevelEnabled: false }]} />
            <meshPhysicalMaterial roughness={0.15} metalness={0.85} clearcoat={1.0} clearcoatRoughness={0.05}>
                <GradientTexture stops={[0, 1]} colors={['#7E1025', '#0E1A40']} />
            </meshPhysicalMaterial>
        </mesh>

        {/* FRONT CONTENT */}
        <group position={[0, 0, 0.0006]}>
            <Image url="/x-logo.png" position={[-1.1, 0.15, 0]} scale={[0.5, 0.5]} transparent />
            
            <Text fontSize={0.5} position={[-0.7, 0.15, 0]} anchorX="left" fontStyle="bold" letterSpacing={0.08}>
                ORANFC
                <meshPhysicalMaterial roughness={0.2} metalness={1} clearcoat={1} emissiveIntensity={0.2}>
                    <GradientTexture stops={[0, 0.5, 1]} colors={['#fee715', '#d4af37', '#aa7d14']} />
                </meshPhysicalMaterial>
            </Text>
            
            <Text fontSize={0.08} position={[0, -0.65, 0]} letterSpacing={0.4} fontStyle="bold">
                THE FUTURE OF NETWORKING
                <meshStandardMaterial color="#8a8a8a" />
            </Text>
            
            {/* Tap Here Icon (Bottom Right) */}
            <Image url="/tap-icon.png" position={[1.3, -0.65, 0]} scale={[0.2, 0.2]} transparent />
        </group>

        {/* BACK CONTENT */}
        <group position={[0, 0, -0.0006]} rotation={[0, Math.PI, 0]}>
            {/* User Details (Left Side) */}
            <Text fontSize={0.2} position={[-0.8, 0.2, 0]} anchorX="center" fontStyle="bold" letterSpacing={0.1}>
                XORANFC
                <meshPhysicalMaterial roughness={0.2} metalness={1} clearcoat={1}>
                     <GradientTexture stops={[0, 1]} colors={['#fee715', '#aa7d14']} />
                </meshPhysicalMaterial>
            </Text>
            <Text fontSize={0.08} color="#ffffff" position={[-0.8, 0.0, 0]} anchorX="center" letterSpacing={0.1}>PREMIUM NFC BUSINESS CARDS</Text>
            <Text fontSize={0.08} color="#94a3b8" position={[-0.8, -0.2, 0]} anchorX="center" fontStyle="bold">+94 76 286 5688</Text>
            <Text fontSize={0.07} color="#d4af37" position={[-0.8, -0.35, 0]} anchorX="center" letterSpacing={0.05}>www.xoranfc.com</Text>

            {/* QR Code (Right Side) */}
            <Image url="/qr-code.png" position={[0.75, 0.05, 0]} scale={[0.8, 0.8]} transparent />
            <Text fontSize={0.12} color="#d4af37" position={[0.75, -0.5, 0]} anchorX="center" letterSpacing={0.15} fontStyle="bold">SCAN ME</Text>
        </group>

      </group>
    </Float>
  );
};

const ThreeDCard = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas 
        shadows 
        dpr={[1, 2]}
        style={{ touchAction: 'pan-y' }} // CRITICAL FIX: Allows native vertical scrolling over the canvas on mobile
      >
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
        
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Environment for reflections */}
        <Environment preset="city" />

        <Suspense fallback={null}>
            <BusinessCard />
        </Suspense>
        
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={2.0} // Smooth, automatic spinning
            makeDefault 
        />
      </Canvas>
    </div>
  );
};

export default ThreeDCard;
