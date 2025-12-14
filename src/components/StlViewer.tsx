import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

interface StlModelProps {
  url: string;
}

const StlModel = ({ url }: StlModelProps) => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    const loader = new STLLoader();
    loader.load(url, (geo) => {
      geo.computeVertexNormals();
      geo.center();
      setGeometry(geo);
    });
  }, [url]);

  if (!geometry) return null;

  return (
    <mesh geometry={geometry} castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color="#4ade80" roughness={0.5} metalness={0.1} />
    </mesh>
  );
};

interface StlViewerProps {
  url: string;
}

const StlViewer = ({ url }: StlViewerProps) => {
  return (
    <div className="w-full h-[400px] bg-muted rounded-lg overflow-hidden border border-border">
      <Canvas
        camera={{ position: [0, 400, 200], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <Suspense fallback={null}>
          <Center>
            <StlModel url={url} />
          </Center>
        </Suspense>
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={100}
          maxDistance={800}
        />
      </Canvas>
      <p className="text-center text-sm text-muted-foreground py-2">
        Sleep om te draaien • Scroll om te zoomen
      </p>
    </div>
  );
};

export default StlViewer;
