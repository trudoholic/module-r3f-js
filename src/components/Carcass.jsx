import {memo} from "react"
import {FrontalBox} from "./FrontalBox.jsx"
import {HorizontalBox} from "./HorizontalBox.jsx"
import {ProfileBox} from "./ProfileBox.jsx"
import {useConfigurator} from "../hooks/useConfigurator.jsx"

const Carcass = () => {
  const {
    debouncedWidth,
    debouncedHeight,
    debouncedDepth,
    debouncedThickness,
  } = useConfigurator()
  const
    moduleWidth = debouncedWidth / 1000,
    moduleHeight = debouncedHeight / 1000,
    moduleDepth = debouncedDepth / 1000,
    panelThickness = debouncedThickness / 1000

  return (
    <>

      <FrontalBox
        name="Front"
        position={{x: 0, y: 0, z: -moduleDepth}}
        size={{x: moduleWidth, y: moduleHeight, z: panelThickness}}
      />

      <HorizontalBox
        name="Bottom"
        position={{x: 0, y: 0, z: 0}}
        size={{x: moduleWidth, y: moduleDepth, z: panelThickness}}
      />

      <HorizontalBox
        name="Top"
        position={{x: 0, y: moduleHeight - panelThickness, z: 0}}
        size={{x: moduleWidth, y: moduleDepth, z: panelThickness}}
      />

      <ProfileBox
        name="Left"
        position={{x: 0, y: panelThickness, z: 0}}
        size={{x: moduleDepth, y: moduleHeight - 2 * panelThickness, z: panelThickness}}
      />

      <ProfileBox
        name="Right"
        position={{x: moduleWidth - panelThickness, y: panelThickness, z: 0}}
        size={{x: moduleDepth, y: moduleHeight - 2 * panelThickness, z: panelThickness}}
      />

    </>
  )
}

export default memo(Carcass)
//<meshStandardMaterial color={"gray"} metalness={1} roughness={0} />
