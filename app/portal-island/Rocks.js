import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Rocks() {
  const gltf = useLoader(GLTFLoader, "models/portal/rocks.glb");
  
  return (
    <primitive object={gltf.scene} />
  )
}