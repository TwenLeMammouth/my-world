"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Ground } from './Ground';
import { Mammoth } from './Mammoth';
import { Rings } from './Rings';
import { Boxes } from './Boxes';
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing';
import { BlendFunction } from "postprocessing"

function MyScene() {
  return (
    <>
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

        {/* let color = new Color(0, 0, 0); */}
        <color args={[0, 0, 0]} attach="background" />

        <CubeCamera resolution={256} frames={Infinity}>
          {(texture) => (
            <>
              <Environment map={texture} />
              <Mammoth />
            </>
          )}
        </CubeCamera>
        
        <Rings />
        <Boxes />

        {/*
            let spotlight = new Spotlight();
            spotlight.intensity = 1.5;
            spotlight.position.set( ... )
        */}
        <spotLight 
            color={[1, 1, 1]}
            intensity={1.5}
            angle={0.6}
            penumbra={0.5}
            position={[5, 5, 0]}
            castShadow
            shadow-bias={-0.0001}
        />
        <spotLight 
            color={[0.1, 0.8, 0.4]}
            intensity={2}
            angle={0.6}
            penumbra={0.5}
            position={[-5, 5, 0]}
            castShadow
            shadow-bias={-0.0001}
        />
        <Ground />

        <EffectComposer>
          <Bloom
            blendFunction={BlendFunction.ADD}
            intensity={1.2}
            width={300}
            height={300}
            kernelSize={4}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.015}
          />
          <ChromaticAberration 
            blendFunction={BlendFunction.NORMAL}
            offset={[0.0005, 0.0012]}
          />
        </EffectComposer>
    </>
  )
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <MyScene />
      </Canvas>
    </Suspense>
  )
}

export default App;