import { Cylinder } from "@react-three/drei";
import { BoxGeometry, Color, CylinderGeometry, TextureLoader, Vector2, Vector3 } from "three"
import { mergeBufferGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createNoise2D } from 'simplex-noise';
import alea from 'alea';
import { useLoader } from "@react-three/fiber";

const noise2D = createNoise2D();

const MAX_HEIGHT = 12
const hexaNum = 45
const maxSize = 30
const wallHeight = 12

function getDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

function Hexagone({ position, height, texture }) {

  return (
    <mesh castShadow receiveShadow position={position} translateZ={ height * 0.5 } >
      <cylinderGeometry args={[1, 1, height, 6, 1, false]} translate={[0, -height * 0.5, 0]}/>
      <meshStandardMaterial map={texture} emissive={[0.02, 0.02, 0.02]} color={!!texture ? '' : '#66AADD'} />
    </mesh>
  )
}

function createMap() {
  let hexaMap = []
  let k = 0
  
  
  for (let i = -maxSize; i <= maxSize; i++) {
    for (let j = -maxSize; j <= maxSize; j++) {
      let noise = (noise2D(i * 0.1, j * 0.1) + 1) * 0.5;
      noise = Math.pow(noise, 1.5)
      k++
      let x = (i + (j % 2) * 0.5) * 1.77;
      let y = noise * 5;
      let z = j * 1.535
      let biome = ''

      switch (Math.floor(noise * 5)) {
        case 0:
          biome = 'sand';
          break;
        case 1:
          biome = 'grass';
          break;
        case 2:
          biome = 'grass';
          break;
        case 3:
          biome = 'stone';
          break;
        default:
          biome = 'snow';
      }


      if(getDistance(x, z) < hexaNum ) {
        hexaMap[k] = [x, y, z, noise, biome]
      } else if(getDistance(x,z) > hexaNum && getDistance(x,z) < hexaNum + 2) {
        hexaMap[k] = [x, wallHeight, z, wallHeight * 0.2]
      }
    }
  }
  return hexaMap
}

export function HexagoneMap() {
  let textures = {
    glass: useLoader(TextureLoader, "/textures/glass.png"),
    dark: useLoader(TextureLoader, "/textures/dark.png"),
    snow: useLoader(TextureLoader, "/textures/snow.png"),
    stone: useLoader(TextureLoader, "/textures/stone.png"),
    dirt: useLoader(TextureLoader, "/textures/dirt.png"),
    grass: useLoader(TextureLoader, "/textures/grass.jpg"),
    sand: useLoader(TextureLoader, "/textures/sand.jpg"),
    water: useLoader(TextureLoader, "/textures/water.jpg")
  }

  const hexagonesMap = createMap().map((cords, i) => (
    <Hexagone key={i} position={[cords[0], cords[1], cords[2]]} height={cords[3] * MAX_HEIGHT} texture={textures[cords[4]]} />
  ))

  return <group mergeBufferGeometries castShadow receiveShadow>
    {hexagonesMap} 
    <mesh receiveShadow>
      <cylinderGeometry args={[hexaNum + 1, hexaNum + 1, MAX_HEIGHT * 0.2, 50]} />
      <meshPhysicalMaterial 
        envMap={''}
        color={new Color("#55AAFF").convertSRGBToLinear().multiplyScalar(3)}
        ior={1.4}
        transmission={1}
        transparent
        thickness={1.8}
        envMapIntensity={0.2}
        roughness={1}
        metalness={0.025}
        roughnessMap={textures.water}
        metalnessMap={textures.water} 
      />
    </mesh>
  </group>
}