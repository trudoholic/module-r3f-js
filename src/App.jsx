import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Experience } from "./components/Experience"
import { Interface } from "./components/Interface"

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [0, 1, 4],
          fov: 42
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <axesHelper />
        {/*<gridHelper />*/}
        <Experience />
        <Environment preset="apartment" />
      </Canvas>
      <Interface />
    </>
  )
}

export default App
