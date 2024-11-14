
function Trunk({ position, rotation, color }) {
  const trunkColor = '#614121'

  return (
    <mesh castShadow receiveShadow position={position} rotation={rotation}>
        <cylinderGeometry args={[1, 1, 1, 6, 1, false]} />
        <meshLambertMaterial color={color} />
    </mesh>
  )
}

function Leaf({ size, position, rotation, color }) {
  return (
    <mesh castShadow receiveShadow position={position} rotation={rotation}>
        <cylinderGeometry args={[size - 1, size, 2, 6, 1, false]} />
        <meshLambertMaterial color={color} />
    </mesh>
  )
}

export function Tree({ trunkNumber, leafNumber, position }) {
  const trunkColor = '#614121'
  const leafColor = '#124422'
  const leafArray = Array.from(Array(leafNumber).keys())
  const trunkArray = Array.from(Array(trunkNumber).keys())

  return (
    <group position={position} scale={1} >
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1, 1.3, 1, 6, 1, false]} position={[0, 0]} />
        <meshLambertMaterial
          color={trunkColor}
        />
      </mesh>
      {trunkArray.map((i) => (
        <Trunk 
          key={`T${i}`}
          position={[0, 1.1 + i + i/10, 0]} 
          rotation={i % 2 == 0 ? [0, Math.PI / 2, 0] : [0, 0, 0]}
          color={trunkColor} />
        )
      )}
      {leafArray.map((i) => (
        <Leaf 
          key={`L${i}`}
          size={leafNumber - i}
          position={[0, (1.1 * (trunkNumber + 1.5)) + (i * 2) + i/10, 0]} 
          rotation={i % 2 == 0 ? [0, Math.PI / 2, 0] : [0, 0, 0]}
          color={leafColor} />
        )
      )}
    </group>
)}