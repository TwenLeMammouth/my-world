

export function Butterfly({ position, rotation, scale }) {

  return (
    <group castShadow receiveShadow position={position} rotation={rotation} scale={scale}>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 2, 6, 1, false]} />
        <meshStandardMaterial color={"#222"} />
      </mesh>
      <mesh position={[0, 0, 2.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.7, 1, 2, 6, 1, false]} />
        <meshStandardMaterial color={"#222"} />
      </mesh>
      <mesh position={[0, 0, -2.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 2, 6, 1, false]} />
        <meshStandardMaterial color={"#222"} />
      </mesh>
      <mesh position={[0, 0, 4.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.7, 2, 6, 1, false]} />
        <meshStandardMaterial color={"#222"} />
      </mesh>
      <mesh position={[0, 0, -4.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 0.7, 2, 6, 1, false]} />
        <meshStandardMaterial color={"#222"} />
      </mesh>
      <mesh position={[0, 0, -5.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.1, 1, 6, 1, false]} />
        <meshStandardMaterial color={"#222"} />
      </mesh>

      <mesh position={[6.2, 1, -5]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[6, 6, 0.1, 6, 1, false]} />
        <meshStandardMaterial color={"#E86726"} />
      </mesh>
      <mesh position={[-6.2, 1, -5]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[6, 6, 0.1, 6, 1, false]} />
        <meshStandardMaterial color={"#2993CF"} />
      </mesh>
      <mesh position={[4.2, 1, 4.1]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[4, 4, 0.1, 6, 1, false]} />
        <meshStandardMaterial color={"#E86726"} />
      </mesh>
      <mesh position={[-4.2, 1, 4.1]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[4, 4, 0.1, 6, 1, false]} />
        <meshStandardMaterial color={"#3AB447"} />
      </mesh>
    </group>
  )

}