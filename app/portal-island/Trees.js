import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Trees() {
  const gltf = useLoader(GLTFLoader, "models/portal/trees.glb");

  useEffect(() => {
    if(!gltf) return;

    let mesh = gltf.scene.children[0];
    for (let key of Object.keys(gltf.materials)) {
      gltf.materials[key].envMapIntensity = 2.5;
    }

  }, [gltf])
  
  return (
    <group dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  )
}