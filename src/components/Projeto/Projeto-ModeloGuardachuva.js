import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats, useGLTF } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('../../assets/Guarda-Chuva.glb'); // Substitua pelo caminho correto do seu modelo GLTF

  return <primitive object={gltf.scene} />;
}

function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
}

export default App;
