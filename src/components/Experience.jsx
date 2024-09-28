import { ContactShadows, OrbitControls } from "@react-three/drei"
import { ModuleV1 } from "./ModuleV1.jsx"
// import { Module } from "./Module.jsx"

export const Experience = () => {
  return (
    <>
      <axesHelper />
      <OrbitControls />

      <ModuleV1 />
      {/*<Module />*/}

      <ContactShadows position={[0, -1, 0]} blur={3} opacity={0.42} />
    </>
  )
}
