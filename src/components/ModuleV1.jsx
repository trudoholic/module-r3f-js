import {useMemo} from "react"
import {FrontalBox} from "./FrontalBox.jsx"
import {HorizontalBox} from "./HorizontalBox.jsx"
import {ProfileBox} from "./ProfileBox.jsx"

const // carcass
  moduleWidth_ = 1100,
  moduleWidth = 1100 / 1000,
  moduleHeight = 680 / 1000,
  moduleDepth = 450 / 1000,
  panelThickness_ = 16,
  panelThickness = 16 / 1000,
  split = 3

export function ModuleV1() {// props

  const dividers = useMemo(() => {
    const n = split - 1
    const partitionWidth = Math.floor((moduleWidth_ - panelThickness_ * (n + 2)) / split)
    const remainingWidth = moduleWidth_ - partitionWidth * n
    const list = [...Array(n).keys()].map((i) => ({
      id: `Divider${i}`,
      x: (partitionWidth + panelThickness_) * (i + 1),
    }))
    return { list, partitionWidth, remainingWidth }
  }, [moduleWidth, split])
  console.log(dividers)

  return (
    <group
      // {...props}
      position={[-moduleWidth/2, -moduleHeight/2, moduleDepth/2]}
    >

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

      {
        dividers.list.map(divider => (
          <ProfileBox
            key={divider.id}
            name={divider.id}
            position={{x: divider.x / 1000, y: panelThickness, z: 0}}
            size={{x: moduleDepth, y: moduleHeight - 2 * panelThickness, z: panelThickness}}
          />
        ))
      }

    </group>
  )
}
//<meshStandardMaterial color={"gray"} metalness={1} roughness={0} />
