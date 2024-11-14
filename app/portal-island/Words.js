import { Float, Text3D } from "@react-three/drei";

export function Words() {
  
  
  return (
    <>
      <Float 
        speed={1}
        rotationIntensity={1.6}
        floatIntensity={1}
        position={[3.75, 5.65, 0.75]}
        rotation={[0, -0.35, -0.05]} >
        <Text3D
          font={"/fonts/Rubik Burned_Regular.json"}
          size={0.575}
          height={0.065}
          curveSegments={12}
           >
          Portal
          <meshStandardMaterial color={[0.3, 0.05, 0.9]} emissive={[0.3, 0.05, 0.9]} />
        </Text3D>
      </Float>
    </>
  )
}