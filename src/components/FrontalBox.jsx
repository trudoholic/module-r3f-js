import {useConfigurator} from "../hooks/useConfigurator.jsx"
import { Edges } from "@react-three/drei"

export function FrontalBox(props) {
  const { name, size, position } = props
  const { moduleColor } = useConfigurator()

  return (
    <mesh
      name={name}
      position={[size.x / 2 + position.x, size.y / 2 + position.y, -size.z / 2 + position.z]}
    >
      <boxGeometry args={[size.x, size.y, size.z]} />
      <meshStandardMaterial color={moduleColor} />
      <Edges color="white" />
    </mesh>
  )
}
