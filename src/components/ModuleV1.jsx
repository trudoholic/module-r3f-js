import {FrontalBox} from "./FrontalBox.jsx"
import {HorizontalBox} from "./HorizontalBox.jsx"
import {ProfileBox} from "./ProfileBox.jsx"

const
  moduleWidth = 1100 / 1000,
  moduleHeight = 680 / 1000,
  moduleDepth = 450 / 1000,
  panelThickness = 16 / 1000

export function ModuleV1() {// props

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
        [...Array(3).keys()].map((i) => (
          <ProfileBox
            key={i}
            name={`Divider${i}`}
            position={{x: .2 * i, y: panelThickness, z: 0}}
            size={{x: moduleDepth, y: moduleHeight - 2 * panelThickness, z: panelThickness}}
          />
        ))
      }

    </group>
  )
}
//<meshStandardMaterial color={"gray"} metalness={1} roughness={0} />
