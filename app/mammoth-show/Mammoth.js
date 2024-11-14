import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { useAnimations } from "@react-three/drei";

export function Mammoth() {
    const group = useRef();
    const { nodes, animations } = useGLTF("./models/mammoth/scene.gltf")
    const gltf = useLoader(GLTFLoader, "./models/mammoth/scene.gltf");
    const { ref, actions, names } = useAnimations(animations);

    useEffect(() => {
        gltf.scene.scale.set(0.65, 0.65, 0.65);
        gltf.scene.position.set(0, 0, 0);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf]);

    useEffect(() => {
        actions[names[2]].reset().fadeIn(0.5).play();
        // return () => actions[names[2]].fadeOut(0.5);
    }, [actions, names]);

    return (
        <group ref={ref} dispose={null}>
            <primitive object={gltf.scene} />
        </group>
    )
}