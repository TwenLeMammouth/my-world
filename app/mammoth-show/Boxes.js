import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { RoundedBox } from "@react-three/drei";

function Box({ color }) {
  const box = useRef();
  const time = useRef(0);
  const [xRotSpeed] = useState(() => Math.random());
  const [yRotSpeed] = useState(() => Math.random());
  const [scale, setScale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);
  const [position, setPosition] = useState(getInitialPosition());

  function getInitialPosition() {
    let v = new Vector3( (Math.random() * 2 - 1) * 3, Math.random() * 2.5 - 0.1, (Math.random() * 2 - 1) *15);
    if (v.x < 0) v.x -= 1.75;
    if (v.x > 0) v.x += 1.75;
    
    return v
  }

  function resetPosition() {
    let v = new Vector3( (Math.random() * 2 - 1) * 3, Math.random() * 2.5 - 0.1, Math.random() * 10 + 10);
    if (v.x < 0) v.x -= 1.75;
    if (v.x > 0) v.x += 1.75;
    
    setPosition(v);
  }

  useFrame((state, delta) => {
    time.current += delta * 1.2;
    let newZ = position.z - (time.current);

    if(newZ < -20) {
      resetPosition();
      time.current = 0;
    }

    box.current.position.set(position.x, position.y, newZ);
    box.current.rotation.x += delta * xRotSpeed;
    box.current.rotation.y += delta * yRotSpeed;
  },[xRotSpeed, yRotSpeed, position])

  return (
    <mesh ref={box} scale={scale} castShadow onPointerEnter={() => setScale(scale * 1.1)} onPointerOut={() => {setScale(scale / 1.1)}}>
      <RoundedBox args={[1, 1, 1]} radius={0.15}>
        <meshStandardMaterial color={color} envMapIntensity={0.15} emissive={color} emissiveIntensity={0.1}/>
      </RoundedBox>
    </mesh>
  )
}

export function Boxes() {
  const [arr] = useState(() => {
    let a = [];
    for(let i = 0; i < 100; i++) a.push(0);
    return a;
  });

  return (
    <>
      {arr.map((e, i) => <Box key={i} color={i % 2 === 0 ? [1, 1, 1] : [0.1, 0.8, 0.4] } /> )}
    </>
  )
}