import { Sparkles } from "@react-three/drei";


export function Particles() {
  return (
    <>
      
      <Sparkles 
        position={[0, 6, 0]} 
        count={100} 
        scale={[12, 12, 12]}
        color={"#22CCFF"}
        size={8}
        speed={0.1}
        noise={1} />
      
    </>
  )
}