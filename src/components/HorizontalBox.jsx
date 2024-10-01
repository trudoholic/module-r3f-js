import {useConfigurator} from "../hooks/useConfigurator.jsx"
import { Edges } from "@react-three/drei"

export function HorizontalBox(props) {
  const { name, size, position } = props
  const { moduleColor } = useConfigurator()

  return (
    <mesh
      name={name}
      position={[size.x / 2 + position.x, size.z / 2 + position.y, -size.y / 2 + position.z]}
      rotation-x={Math.PI / 2}
    >
      <boxGeometry args={[size.x, size.y, size.z]} />
      <meshStandardMaterial color={moduleColor} />
      <Edges color="white" />
    </mesh>
  )
}
