"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function Blob() {
  return (
    <Float speed={1.7} rotationIntensity={0.55} floatIntensity={1.35}>
      <mesh>
        <icosahedronGeometry args={[1.25, 28]} />
        <MeshDistortMaterial
          color="#4C9AFF"
          attach="material"
          distort={0.38}
          speed={1.35}
          roughness={0.18}
          metalness={0.22}
          emissive="#7EB6FF"
          emissiveIntensity={0.18}
        />
      </mesh>
    </Float>
  );
}

export default function BlobScene() {
  return (
    <div className="pointer-events-none absolute -right-[8%] top-[-6%] z-0 h-[72%] w-[62%] opacity-70">
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.95} />
        <directionalLight position={[3, 2, 4]} intensity={1.15} />
        <Blob />
      </Canvas>
    </div>
  );
}
