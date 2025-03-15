'use client';

import { Canvas } from '@react-three/fiber';
import { Box, Cylinder } from '@react-three/drei';

function Tree() {
  return (
    <group position={[0, -2, 0]}>
      {/* Gövde */}
      <Cylinder
        args={[0.2, 0.3, 3, 8]}
        position={[0, 1.5, 0]}
      >
        <meshStandardMaterial color="#4B5563" />
      </Cylinder>
      
      {/* Alt yapraklar */}
      <Box position={[-1, 1, 0]} rotation={[0, 0, -0.3]} scale={[1.5, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      <Box position={[1, 1, 0]} rotation={[0, 0, 0.3]} scale={[1.5, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      <Box position={[0, 1, 1]} rotation={[0.3, 0, 0]} scale={[1.5, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      <Box position={[0, 1, -1]} rotation={[-0.3, 0, 0]} scale={[1.5, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      
      {/* Orta yapraklar */}
      <Box position={[-0.8, 2, 0]} rotation={[0, 0, -0.2]} scale={[1.2, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      <Box position={[0.8, 2, 0]} rotation={[0, 0, 0.2]} scale={[1.2, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      <Box position={[0, 2, 0.8]} rotation={[0.2, 0, 0]} scale={[1.2, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      <Box position={[0, 2, -0.8]} rotation={[-0.2, 0, 0]} scale={[1.2, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      
      {/* Üst yapraklar */}
      <Box position={[0, 3, 0]} rotation={[0, 0, 0]} scale={[1, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      <Box position={[-0.4, 2.8, 0]} rotation={[0, 0, -0.1]} scale={[0.8, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      <Box position={[0.4, 2.8, 0]} rotation={[0, 0, 0.1]} scale={[0.8, 0.2, 0.1]}>
        <meshStandardMaterial color="#059669" />
      </Box>
    </group>
  );
}

export default function TreeAnimation() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#f0fdf4' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Tree />
      </Canvas>
    </div>
  );
} 