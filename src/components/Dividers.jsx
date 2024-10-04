import {memo, useMemo} from "react"
import {ProfileBox} from "./ProfileBox.jsx"
import {DividerDim} from "./CarcassDim.jsx"
import {useConfigurator} from "../hooks/useConfigurator.jsx"

const Dividers = () => {
  const {
    // width,
    debouncedWidth,
    // height,
    debouncedHeight,
    // depth,
    debouncedDepth,
    thickness,
    debouncedThickness,
    // moduleColor,
    split,
    showDim,
  } = useConfigurator()
  const
    width = debouncedWidth,
    moduleHeight = debouncedHeight / 1000,
    moduleDepth = debouncedDepth / 1000,
    panelThickness = debouncedThickness / 1000

  const dividers = useMemo(() => {
    const n = split - 1
    const partitionWidth = Math.floor((width - thickness * (n + 2)) / split)
    // const remainingWidth = width - (partitionWidth + thickness) * n
    const remainingWidth = width - partitionWidth * n - thickness * (n + 2)
    const list = [...Array(n).keys()].map((i) => ({
      id: `Divider${i}`,
      x: (partitionWidth + thickness) * (i + 1),
    }))
    return { list, partitionWidth, remainingWidth }
  }, [width, split])

  return (
    <>
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
      {
        showDim && dividers.list.map(divider => (
          <DividerDim
            key={divider.id}
            value={dividers.partitionWidth}
            // value={dividers.partitionWidth + thickness}
            x={divider.x}
            // x={divider.x}
          />
        ))
      }
      {
        showDim && <DividerDim
          value={dividers.remainingWidth}
          x={width - thickness}
        />
      }
    </>
  )
}

export default memo(Dividers)
