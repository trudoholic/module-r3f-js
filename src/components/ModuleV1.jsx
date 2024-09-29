import Carcass from "./Carcass.jsx"
import CarcassDim from "./CarcassDim.jsx"
import Dividers from "./Dividers.jsx"

const
  moduleWidth = 1100 / 1000,
  moduleHeight = 680 / 1000,
  moduleDepth = 450 / 1000

export function ModuleV1() {// props

  return (
    <group
      // {...props}
      position={[-moduleWidth/2, -moduleHeight/2, moduleDepth/2]}
    >

      <Carcass
        width={1100}
        height={680}
        depth={450}
        thickness={16}
      />

      <CarcassDim
        width={1100}
        height={680}
        depth={450}
      />

      <Dividers
        width={1100}
        height={680}
        depth={450}
        thickness={16}
        split={3}
      />

    </group>
  )
}
