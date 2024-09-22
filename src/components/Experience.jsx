import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Module } from "./Module.jsx";

export const Experience = () => {
  return (
    <>
      {/*<axesHelper />*/}
      <OrbitControls />
      <Module />
      <ContactShadows position={[0, -1, 0]} blur={3} opacity={0.42} />
    </>
  );
};
