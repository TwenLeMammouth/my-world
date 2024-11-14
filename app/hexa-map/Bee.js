

export function Bee({ position, rotation }) {
  

  return (
    <group castShadow receiveShadow position={position} rotation={rotation}>
      <mesh position={[0, 0, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0, 0.75, 0.4, 6, 1, false]} />
        <meshStandardMaterial color={"#CC9922"} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.8, 1, 1, 6, 1, false]} />
        <meshStandardMaterial color={"#222222"} />
      </mesh>
      <mesh position={[0, 0, -1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 1, 6, 1, false]} />
        <meshStandardMaterial color={"#CC9922"} />
      </mesh>
      <mesh position={[0, 0, -2.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 0.8, 1, 6, 1, false]} />
        <meshStandardMaterial color={"#222222"} />
      </mesh>
      <mesh position={[0, 0, -3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.75, 0, 0.4, 6, 1, false]} />
        <meshStandardMaterial color={"#CC9922"} />
      </mesh>

      <mesh position={[1.4, 1, -1.1]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.1, 6, 1, false]} />
        <meshStandardMaterial color={"#FFF"} />
      </mesh>
      <mesh position={[-1.4, 1, -1.1]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.1, 6, 1, false]} />
        <meshStandardMaterial color={"#FFF"} />
      </mesh>

      <mesh position={[0.25, 0.3, 0.8]} rotation={[1, 0, -0.1]}>
        <cylinderGeometry args={[0, 0.1, 0.01, 6, 1, false]} />
        <meshStandardMaterial color={"#000"} />
      </mesh>
      <mesh position={[-0.25, 0.3, 0.8]} rotation={[1, 0, 0.1]}>
        <cylinderGeometry args={[0, 0.1, 0.01, 6, 1, false]} />
        <meshStandardMaterial color={"#000"} />
      </mesh>
    </group>
    )
}