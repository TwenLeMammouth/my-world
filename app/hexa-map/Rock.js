import { Dodecahedron } from "@react-three/drei";
import { EffectComposer, Outline } from "@react-three/postprocessing";
import { Suspense, useEffect, useRef } from "react";


export function Rock() {
  const outlineRef = useRef();

  const meshRef = useRef();

  useEffect(() => {
    
      const outlineSelection = outlineRef.current.selection;

      const mesh = meshRef.current;
      
      outlineSelection.set([mesh]);
    
  })

  return (
    <>
      <mesh ref={meshRef} > 
        <Dodecahedron scale={0.01} args={[2, 1]} >
          <meshLambertMaterial color={'#555555'} />
        </Dodecahedron>
        <Dodecahedron scale={0.01} args={[3, 1]} position={[0.035, 0.005, 0]} >
          <meshLambertMaterial color={'#555555'} />
        </Dodecahedron>
        <Dodecahedron scale={0.01} args={[5, 1]} position={[0.01, 0.01, 0.06]} >
          <meshLambertMaterial color={'#555555'} />
        </Dodecahedron>
        <Dodecahedron scale={0.01} args={[7, 1]} position={[0.08, 0.03, 0.07]} >
          <meshLambertMaterial color={'#555555'} />
        </Dodecahedron>
      </mesh>
      <Suspense fallback={null}>
        <EffectComposer>
          <Outline
            ref={outlineRef}
            edgeStrength={2.5} // the edge strength
            pulseSpeed={1.0} // a pulse speed. A value of zero disables the pulse effect
            visibleEdgeColor={0x000000} // the color of visible edges
            hiddenEdgeColor={0x22090a} // the color of hidden edges
            xRay={true} // indicates whether X-Ray outlines are enabled
          />
        </EffectComposer>
      </Suspense>
    </>
  )
}