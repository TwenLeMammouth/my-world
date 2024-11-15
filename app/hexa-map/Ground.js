import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, TextureLoader } from "three";


export function Ground() {
  const [ref] = usePlane(
    () => ({
      type: "Static",
      rotation: [-Math.PI / 2, 0, 0]
    }),
    useRef(null)
  );

  const gridMap = useLoader(TextureLoader, "/textures/grid.png")

  const aoMap = useLoader(TextureLoader, "/textures/ground-ao.png")

  const alphaMap = useLoader(TextureLoader, "/textures/alpha-map.png")

  useEffect(() => {
    gridMap.anisotropy = 16;
  }, [gridMap]);

  const meshRef = useRef(null);
  const meshRef2 = useRef(null);
  useEffect(() => {
    var uvs = meshRef.current.geometry.attributes.uv.array;
    meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));

    var uvs2 = meshRef2.current.geometry.attributes.uv.array;
    meshRef2.current.geometry.setAttribute("uv2", new BufferAttribute(uvs2, 2));
  }, [meshRef.current, meshRef2.current]);

  return (
    <>
      <mesh
        ref={meshRef2}
        position={[-2.285, -0.01, -1.325]} 
        rotation-x={-Math.PI * 0.5} >
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial 
          opacity={0.325}
          alphaMap={gridMap}
          transparent
          color={"white"} />
      </mesh>
      
      <mesh 
        ref={meshRef}
        position={[-2.285, -0.011, -1.325]} 
        rotation-x={-Math.PI * 0.5} 
        rotation-z={-0.079} 
        >
        <circleGeometry args={[6.12, 50]} />
        <MeshReflectorMaterial 
          aoMap={aoMap}
          alphaMap={alphaMap}
          transparent
          color={[0.5, 0.5, 0.5]}
          envMapIntensity={0.35}
          metalness={0.05}
          roughness={0.4}
          dithering
          blur={[1024, 512]}
          mixBlur={3}
          mixStrength={30}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          debug={0}
          reflectorOffset={0.02} />
      </mesh>
    </>
  )
}