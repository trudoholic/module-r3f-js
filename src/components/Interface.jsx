import {
  Box,
  Checkbox,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useConfigurator } from "../hooks/useConfigurator";

export const Interface = () => {
  const {
    showDim,
    toggleDim,
    split,
    setSplit,
    width,
    setWidth,
    moduleColor,
    setModuleColor
  } = useConfigurator();

  return (
    <Stack
      textColor={"white"}
      pos={"fixed"}
      top={8}
      right={8}
      minW={200}
      userSelect={"none"}
    >

      <Box
        backgroundColor={"blackAlpha.600"}
        paddingY={4}
        paddingX={8}
        rounded="2xl"
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Размеры
        </Text>
        <Checkbox
          defaultChecked
          value={showDim}
          onChange={toggleDim}
        >
          Показывать
        </Checkbox>
      </Box>

      <Box
        backgroundColor={"blackAlpha.600"}
        paddingY={4}
        paddingX={8}
        rounded="2xl"
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Ширина модуля
        </Text>
        <Slider
          value={width}
          onChange={setWidth}
          min={300}
          max={5000}
          step={1}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>

      <Box
        backgroundColor={"blackAlpha.600"}
        paddingY={4}
        paddingX={8}
        rounded="2xl"
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Кол-во ячеек
        </Text>
        <RadioGroup
          onChange={(value) => setSplit(parseInt(value))}
          value={"" + split}
        >
          <Stack direction="column" spacing={4} mt={4}>
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
            <Radio value="4">4</Radio>
            <Radio value="5">5</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box
        backgroundColor={"blackAlpha.600"}
        paddingY={4}
        paddingX={8}
        rounded="2xl"
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Цвет
        </Text>
        <RadioGroup onChange={setModuleColor} value={moduleColor}>
          <Stack direction="column" spacing={4} mt={4}>
            <Radio value="white">Белый</Radio>
            <Radio value="gray">Серый</Radio>
            <Radio value="beige">Бежевый</Radio>
          </Stack>
        </RadioGroup>
      </Box>

    </Stack>
  );
};
