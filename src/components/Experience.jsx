import { Bounds, ContactShadows, OrbitControls } from "@react-three/drei"
import { ModuleV1 } from "./ModuleV1.jsx"
// import { Module } from "./Module.jsx"

export const Experience = () => {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
      />

      <Bounds
        fit clip observe
        // damping={0}
        margin={1.2}
      >
        <ModuleV1 />
        {/*<Module />*/}
      </Bounds>

      <ContactShadows position={[0, -1, 0]} blur={3} opacity={0.42} />
    </>
  )
}
