import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export function Twen() {
  const group = useRef();
  const { nodes, animations } = useGLTF("./models/twen/TwenLeMammouthAnim.gltf")
  const gltf = useLoader(GLTFLoader, "./models/twen/TwenLeMammouthAnim.gltf");
  const { ref, actions, names } = useAnimations(animations);
  

  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, 5, 0);
    gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            object.material.envMapIntensity = 20;
        }
    });
  }, [gltf]);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
    // return () => actions[names[2]].fadeOut(0.5);
  }, [actions, names]);

  return (
      <group ref={ref} dispose={null}>
          <primitive object={gltf.scene} />
      </group>
  )
}