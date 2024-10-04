import { useEffect } from "react"
import { useBounds } from "@react-three/drei"
import Carcass from "./Carcass.jsx"
import CarcassDim from "./CarcassDim.jsx"
import Dividers from "./Dividers.jsx"
import { useConfigurator } from "../hooks/useConfigurator"

export function ModuleV1() {
  const {
    width,
    height,
    depth,
    showDim,
  } = useConfigurator()
  const
    moduleWidth = width / 1000,
    moduleHeight = height / 1000,
    moduleDepth = depth / 1000

  const bounds = useBounds()
  useEffect(() => {
    bounds.refresh().clip().fit()
  }, [width, height, depth])



  return (
    <group
      position={[-moduleWidth/2, -moduleHeight/2, moduleDepth/2]}
    >
      <Carcass />
      {
        showDim && <CarcassDim />
      }
      <Dividers />
    </group>
  )
}
