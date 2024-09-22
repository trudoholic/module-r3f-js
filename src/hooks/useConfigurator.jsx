import { createContext, useContext, useState } from "react";

export const ConfiguratorContext = createContext({});

export const ConfiguratorProvider = ({ children }) => {
  const [showDim, setShowDim] = useState(true);
  const toggleDim = () => { setShowDim(show => !show) }

  const [split, setSplit] = useState(3);
  const [moduleWidth, setModuleWidth] = useState(1.1);
  const [moduleColor, setModuleColor] = useState("gray");

  return (
    <ConfiguratorContext.Provider
      value={{
        showDim,
        toggleDim,
        split,
        setSplit,
        moduleWidth,
        setModuleWidth,
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
