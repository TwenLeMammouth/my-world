import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function FloatingRocks() {
  const rock1 = useLoader(GLTFLoader, "models/portal/floating_rock_1.glb");
  const rock2 = useLoader(GLTFLoader, "models/portal/floating_rock_2.glb");
  const rock3 = useLoader(GLTFLoader, "models/portal/floating_rock_3.glb");

  return (
    <>
      <Float 
        speed={1}
        rotationIntensity={1.6}
        floatIntensity={1}
        position={[-12, -2, 5]} >
        <primitive object={rock1.scene} />
      </Float>
      <Float 
        speed={1.5}
        rotationIntensity={1.6}
        floatIntensity={1}
        position={[-5, 10, -18]} >
        <primitive object={rock2.scene}  />
      </Float>
      <Float 
        speed={0.8}
        rotationIntensity={1.6}
        floatIntensity={1}
        position={[14, 3.5, -7]} >
        <primitive object={rock3.scene} />
      </Float>
    </>
  )
}