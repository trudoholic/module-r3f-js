import {memo} from "react"
import {DimensionLine} from "./DimensionLine.jsx"
import {DimensionText} from "./DimensionText.jsx"
import {useConfigurator} from "../hooks/useConfigurator.jsx"

const lineGap = .05
const textGap = .1

export const DividerDim = ({value, x}) => {
  return (
    <>
      <DimensionLine points={[
        [(x - value) / 1000, -lineGap, 0],
        [x / 1000, -lineGap, 0]
      ]}
      />

      <DimensionText
        position={[(x - value / 2) / 1000, -textGap, 0]}
        value={value}
      />
    </>
  )
}

const CarcassDim = () => {
  const {
    width,
    height,
    depth,
  } = useConfigurator()
  const
    moduleWidth = width / 1000,
    moduleHeight = height / 1000,
    moduleDepth = depth / 1000

  return (
    <>
      <DimensionLine points={[
        [0, moduleHeight + lineGap, 0],
        [moduleWidth, moduleHeight + lineGap, 0]
      ]}
      />

      <DimensionText
        position={[moduleWidth/2, moduleHeight + textGap, 0]}
        value={width}
      />

      <DimensionLine points={[
        [-lineGap, 0, 0],
        [-lineGap, moduleHeight, 0]
      ]}
      />

      <DimensionText
        position={[-textGap, moduleHeight/2, 0]}
        rotation={[0, 0, Math.PI / 2]}
        value={height}
      />

      <DimensionLine points={[
        [0, moduleHeight + lineGap, -moduleDepth],
        [0, moduleHeight + lineGap, 0]
      ]}
      />

      <DimensionText
        position={[0, moduleHeight + textGap, -moduleDepth/2]}
        rotation={[0, -Math.PI / 2, 0]}
        value={depth}
      />
    </>
  )
}

export default memo(CarcassDim)
