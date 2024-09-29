import {Text} from "@react-three/drei"

export function DimensionText(props) {
  const {value, ...rest} = props
  return (
    <Text {...rest} color="maroon" scale={.05}>
      {`${value} мм`}
    </Text>
  )
}
