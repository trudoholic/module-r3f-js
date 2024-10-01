import * as THREE from 'three'
import {Line, Text} from "@react-three/drei";
import { useConfigurator } from "../hooks/useConfigurator";

function DimensionLine(props) {
  const slash = .01;
  const [[x0, y0, z0], [x1, y1, z1]] = props.points
  const v0 = new THREE.Vector3(x0, y0, z0), v1 = new THREE.Vector3(x1, y1, z1)
  return (
    <>
      <Line {...props} color="gray" />
      <Line points={[v0.clone().addScalar(-slash), v0.clone().addScalar(slash)]} color="gray" />
      <Line points={[v1.clone().addScalar(-slash), v1.clone().addScalar(slash)]} color="gray" />
    </>
  )
}

function DimensionText(props) {
  const {value, ...rest} = props
  return (
    <Text {...rest} color="maroon" scale={.05}>
      {`${value * 1000} мм`}
    </Text>
  )
}

export function Module(props) {
  // const moduleDepth = .45, moduleHeight = .68, panelThickness = .016;
  const depth = 450, height = 680, thickness = 16;
  const { width, moduleColor, split, showDim } = useConfigurator();
  const
    moduleWidth = width / 1000,
    moduleHeight = height / 1000,
    moduleDepth = depth / 1000,
    panelThickness = thickness / 1000

  const textGap = .1, lineGap = .05;

  const partitionWidth = Math.floor(1000 * moduleWidth / split) / 1000;
  const remainingWidth = Math.floor(1000 * (moduleWidth - partitionWidth * (split - 1))) / 1000;

  return (
    <group {...props} dispose={null}>

      {
        showDim && <>
          <DimensionLine points={[
            [-moduleWidth/2, moduleHeight/2 + lineGap, moduleDepth/2],
            [moduleWidth/2, moduleHeight/2 + lineGap, moduleDepth/2]
          ]}
          />

          <DimensionText
            position={[0, moduleHeight / 2 + textGap, moduleDepth / 2]}
            value={moduleWidth}
          />

          <DimensionLine points={[
            [-moduleWidth/2 - lineGap, -moduleHeight/2, moduleDepth/2],
            [-moduleWidth/2 - lineGap, moduleHeight/2, moduleDepth/2]
          ]}
          />

          <DimensionText
            position={[-(moduleWidth / 2 + textGap), 0, moduleDepth / 2]}
            rotation={[0, 0, Math.PI / 2]}
            value={moduleHeight}
          />

          <DimensionLine points={[
            [-moduleWidth/2, moduleHeight/2 + lineGap, -moduleDepth/2],
            [-moduleWidth/2, moduleHeight/2 + lineGap, moduleDepth/2]
          ]}
          />

          <DimensionText
            position={[-(moduleWidth / 2), moduleHeight / 2 + textGap, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            value={moduleDepth}
          />
        </>
      }

      <mesh
        name="Bottom"
        position={[0, -.5 * moduleHeight, 0]}
        scale={[moduleWidth, panelThickness, moduleDepth]}
      >
        <boxGeometry />
        <meshStandardMaterial color={moduleColor} />
      </mesh>

      <mesh
        name="Top"
        position={[0, .5 * moduleHeight, 0]}
        scale={[moduleWidth, panelThickness, moduleDepth]}
      >
        <boxGeometry />
        <meshStandardMaterial color={moduleColor} />
      </mesh>

      <mesh
        name="Left"
        position={[-.5 * moduleWidth, 0, 0]}
        scale={[panelThickness, moduleHeight, moduleDepth]}
      >
        <boxGeometry />
        <meshStandardMaterial color={moduleColor} />
      </mesh>

      <mesh
        name="Right"
        position={[.5 * moduleWidth, 0, 0]}
        scale={[panelThickness, moduleHeight, moduleDepth]}
      >
        <boxGeometry />
        <meshStandardMaterial color={moduleColor} />
      </mesh>

      {
        [...Array(split).keys()].map((i) => (
          <group key={i}>
            <mesh
              name={`Divider${i}`}
              position={[-moduleWidth/2 + partitionWidth * i, 0, 0]}
              scale={[panelThickness, moduleHeight, moduleDepth]}
            >
              <boxGeometry />
              <meshStandardMaterial color={moduleColor} />
            </mesh>

            {
              showDim && <>
                <DimensionLine points={[
                  [-moduleWidth/2 + partitionWidth * i, -moduleHeight / 2 - lineGap, moduleDepth/2],
                  [
                    i === split - 1? moduleWidth/2: -moduleWidth/2 + partitionWidth * (i + 1),
                    -moduleHeight / 2 - lineGap,
                    moduleDepth/2
                  ]
                ]}
                />

                <DimensionText
                  position={[
                    -moduleWidth/2 + partitionWidth * (i + .5),
                    -moduleHeight / 2 - textGap,
                    moduleDepth/2
                  ]}
                  value={i === split - 1? remainingWidth: partitionWidth}
                />
              </>
            }

          </group>
        ))
      }

    </group>
  );
}
