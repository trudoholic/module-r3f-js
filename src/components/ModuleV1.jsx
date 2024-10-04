import { useEffect } from "react"
import { useBounds } from "@react-three/drei"
import Carcass from "./Carcass.jsx"
import CarcassDim from "./CarcassDim.jsx"
import Dividers from "./Dividers.jsx"
import { useConfigurator } from "../hooks/useConfigurator"

export function ModuleV1() {
  const {
    debouncedWidth,
    debouncedHeight,
    debouncedDepth,
    showDim,
  } = useConfigurator()
  const
    moduleWidth = debouncedWidth / 1000,
    moduleHeight = debouncedHeight / 1000,
    moduleDepth = debouncedDepth / 1000

  const bounds = useBounds()
  useEffect(() => {
    bounds.refresh().clip().fit()
  }, [debouncedWidth, debouncedHeight, debouncedDepth])



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
