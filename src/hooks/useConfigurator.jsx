import { createContext, useContext, useState } from "react"
import { useDebounce } from "@reactuses/core"

export const ConfiguratorContext = createContext({})

export const ConfiguratorProvider = ({ children }) => {
  const [showDim, setShowDim] = useState(true)
  const toggleDim = () => { setShowDim(show => !show) }

  const [split, setSplit] = useState(3)
  const [width, setWidth] = useState(1100)
  const [height, setHeight] = useState(680)
  const [depth, setDepth] = useState(450)
  const [thickness, setThickness] = useState(16)
  const [moduleColor, setModuleColor] = useState("gray")

  return (
    <ConfiguratorContext.Provider
      value={{
        showDim,
        toggleDim,
        split,
        setSplit,
        width,
        debouncedWidth: useDebounce(width, 500),
        height,
        debouncedHeight: useDebounce(height, 500),
        depth,
        debouncedDepth: useDebounce(depth, 500),
        thickness,
        debouncedThickness: useDebounce(thickness, 500),
        setWidth,
        setHeight,
        setDepth,
        setThickness,
        moduleColor,
        setModuleColor,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  const context = useContext(ConfiguratorContext);
  if (context === undefined) {
    throw new Error(
      "useConfigurator must be used within a ConfiguratorProvider"
    );
  }
  return context;
};
