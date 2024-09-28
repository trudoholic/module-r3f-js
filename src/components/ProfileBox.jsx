export function ProfileBox(props) {
  const { name, size, position } = props

  return (
    <mesh
      name={name}
      position={[size.z / 2 + position.x, size.y / 2 + position.y, -size.x / 2 + position.z]}
      rotation-y ={Math.PI / 2}
    >
      <boxGeometry args={[size.x, size.y, size.z]} />
      <meshStandardMaterial color={"gray"} />
    </mesh>
  )
}
