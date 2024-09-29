import * as THREE from "three"
import {Line} from "@react-three/drei"

export function DimensionLine(props) {
  const slash = .01
  const [[x0, y0, z0], [x1, y1, z1]] = props.points
  const v0 = new THREE.Vector3(x0, y0, z0), v1 = new THREE.Vector3(x1, y1, z1)
  return (
    <>
      <Line {...props} color="gray" />
      <Line points={[v0.clone().addScalar(-slash), v0.clone().addScalar(slash)]} color="gray" />
      <Line points={[v1.clone().addScalar(-slash), v1.clone().addScalar(slash)]} color="gray" />
    </>
  )
}
