import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";

export function Rings() {
  const itemsRef = useRef([]);

  useFrame((state) => {
    let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
        let mesh = itemsRef.current[i];
        // [-7, 6]
        // let z = (i - 6) * 3.5;
        let z = (i - 6) * 3 + ((elapsed * 0.2) % 3) * 2;
        mesh.position.set(0, 0, -z);

        let dist = Math.abs(z);
        mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

        let colorScale = 1;
        if (dist > 2) {
            colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
        }
        colorScale *= 0.5

        if (i % 2 == 1) {
            mesh.material.emissive = new Color(1, 1, 1).multiplyScalar(colorScale);
        } else {
            mesh.material.emissive = new Color(0.1, 0.8, 0.4).multiplyScalar(colorScale);
        }
    }
  })

  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
        >
          <torusGeometry args={[3, 0.1, 16, 88]}  />
          <meshStandardMaterial
            emissive={[0.5, 0.5, 0.5]}
            color={[0, 0, 0]}
          />
        </mesh>
      ))}
    </>
  );
}
