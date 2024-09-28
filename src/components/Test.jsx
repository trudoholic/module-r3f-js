export function Test(props) {
  const [sx, sy, sz] = props.scale;
  return (
    <group
      rotation={props.rotation}
    >

      <mesh
        position={[sx/2, sy/2, sz/2]}
        scale={[sx, sy, sz]}
      >
        <boxGeometry />
        <meshStandardMaterial color={props.color} />
      </mesh>
    </group>
  )
}
