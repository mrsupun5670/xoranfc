import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function GravityScene() {
  const containerRef = useRef(null);
  const mouseRef = useRef({
    x: 0,
    y: 0
  });
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.0025);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- GRID / CLOTH GEOMETRY ---
    const segments = 80;
    const size = 100;
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    const originalPositions = new Float32Array(geometry.attributes.position.count * 3);
    const positions = geometry.attributes.position.array;
    const velocities = new Float32Array(geometry.attributes.position.count);

    for (let i = 0; i < positions.length; i++) {
      originalPositions[i] = positions[i];
      velocities[i] = 0;
    }

    const material = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });

    const points = new THREE.Points(geometry, material);
    const wireframe = new THREE.Mesh(geometry, wireframeMaterial);
    points.rotation.x = -Math.PI / 2;
    wireframe.rotation.x = -Math.PI / 2;
    scene.add(points);
    scene.add(wireframe);

    // --- STAR FIELD (NEW) ---
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1500;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 300;
      starPositions[i * 3 + 1] = Math.random() * 150;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 150 - 50;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Debug Helper
    const debugGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const debugMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const debugSphere = new THREE.Mesh(debugGeometry, debugMaterial);
    scene.add(debugSphere); // ENABLED DEBUG SPHERE

    // Raycaster
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    // Animation Loop
    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Mouse Interaction
      const ndc = new THREE.Vector2(mouseRef.current.x / window.innerWidth * 2 - 1, -(mouseRef.current.y / window.innerHeight) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      const intersection = new THREE.Vector3();
      const hit = raycaster.ray.intersectPlane(plane, intersection);

      if (hit) {
        targetRef.current.lerp(intersection, 0.1);
        debugSphere.position.copy(targetRef.current);
      } else {
         // Fallback to moving towards 0 if missed
         // targetRef.current.lerp(new THREE.Vector3(0,0,0), 0.05);
      }

      // Grid Deformation with Spring Physics
      const posAttribute = geometry.attributes.position;
      
      for (let i = 0; i < posAttribute.count; i++) {
        const x = originalPositions[i * 3];
        const y = originalPositions[i * 3 + 1];
        
        // Transform to world coordinates (since mesh is rotated)
        // Mesh is rotated -90 deg on X.
        // Local (x, y, 0) -> World (x, 0, -y) roughly? 
        // Let's stick to the original logic which seemed to work in the source:
        const worldX = x;
        const worldZ = -y; // Because of rotation -PI/2 on X

        const dx = worldX - targetRef.current.x;
        const dz = worldZ - targetRef.current.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        
        const tension = 0.02;
        const damping = 0.95;
        const influenceRadius = 20;

        const mouseForce = Math.max(0, influenceRadius - dist);
        const targetDip = -2.5 * Math.pow(mouseForce / influenceRadius, 2) * 5;
        
        const wave = Math.sin(x * 0.1 + time * 0.5) * 0.5 + Math.cos(y * 0.1 + time * 0.3) * 0.5;
        
        const targetHeight = targetDip + wave;
        const currentHeight = posAttribute.getZ(i);
        
        const force = (targetHeight - currentHeight) * tension;
        velocities[i] += force;
        velocities[i] *= damping;
        
        posAttribute.setZ(i, currentHeight + velocities[i]);
      }
      
      posAttribute.needsUpdate = true;

      // Star Animation - Slower, more majestic
      stars.rotation.y = time * 0.02;

      // Camera Parallax
      camera.position.x += (ndc.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (10 + ndc.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
      // console.log('Mouse move:', mouseRef.current);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      wireframeMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 bg-[#050510]" aria-hidden="true" />;
}
