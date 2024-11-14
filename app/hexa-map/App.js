"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cylinder, Environment, KeyboardControls, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Tree } from './Tree';
import { Ground } from './Ground';
import { Physics } from '@react-three/cannon';
import { Color, Vector2, Vector3 } from 'three';
import { Rock } from './Rock';
import { Bee } from './Bee';
import { Twen } from './Twen';
import { CharacterController } from './CharacterController';
import { CylinderCollider, RigidBody } from '@react-three/rapier';
import { Butterfly } from './Butterfly';
import { HexagoneMap } from './HexagoneMap';

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function MyScene() {
  let lightColor = new Color(1, 1, 0.7);

  useEffect(() => {
    console.log()
  }, []);

  return (
    <Suspense fallback={null}>
      <Environment background={"only"} files={"./textures/bg.hdr"} />

      // <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[-60, 50, 60]} />
      
      <pointLight color={lightColor} position={[40, 30, 40]} />
      // <pointLight color={lightColor} position={[-40, 30, 50]} />
      // <pointLight color={lightColor} position={[0, 30, -50]} />
      

      <Bee position={[50, 3, 0]} />

      <Butterfly position={[50, 6, 0]} scale={[0.1, 0.1, 0.1]} />
      
      <Twen />

      <HexagoneMap />

    </Suspense>
  )
}

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );
  return (
    <KeyboardControls map={map}>
      <Suspense fallback={null}>
        <Canvas shadows gl={{alpha: true}}>
          <Physics broadphase="SAP" gravity={[0, -2.6, 0]} >
            <MyScene  />
          </Physics>
        </Canvas>
      </Suspense>
    </KeyboardControls>
  )
}

export default App;