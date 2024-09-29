import {memo, useMemo} from "react"
import {ProfileBox} from "./ProfileBox.jsx"

const Dividers = ({width, height, depth, thickness, split}) => {
  const
    // moduleWidth = width / 1000,
    moduleHeight = height / 1000,
    moduleDepth = depth / 1000,
    panelThickness = thickness / 1000

  const dividers = useMemo(() => {
    const n = split - 1
    const partitionWidth = Math.floor((width - thickness * (n + 2)) / split)
    const remainingWidth = width - partitionWidth * n
    const list = [...Array(n).keys()].map((i) => ({
      id: `Divider${i}`,
      x: (partitionWidth + thickness) * (i + 1),
    }))
    return { list, partitionWidth, remainingWidth }
  }, [width, split])
  // console.log(dividers)

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
    </>
  )
}

export default memo(Dividers)
