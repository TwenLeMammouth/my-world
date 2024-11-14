"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Track } from './Track';
import { Ground } from './Ground';
import { Car } from './Car';
import { Physics } from '@react-three/cannon';

function MyScene() {
  const [thirdPerson, setThirdPerson] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21])

  useEffect(() => {
    function keydownHandler(e) {
      if (e.key == "k") {
        if (thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
        setThirdPerson(!thirdPerson);
      }
    }

    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, [thirdPerson]);

  return (
    <Suspense fallback={null}>
      <Environment files={"/textures/envmapkart.hdr"} background={"both"} />

      <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
      {!thirdPerson && (
        <OrbitControls target={[-2.64, -0.71, 0.03]} />
      )}

      <Track />
      <Ground />
      <Car thirdPerson={thirdPerson} />
    </Suspense>
  )
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Physics broadphase="SAP" gravity={[0, -1.5, 0]} >
          <MyScene />
        </Physics>
      </Canvas>
    </Suspense>
  )
}

export default App;