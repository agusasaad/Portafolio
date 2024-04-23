import { Box, Flex, Text } from "@chakra-ui/react";
import skill from "../skill.js";
import "../AboutMe.css";

const Carrusel = () => {
  return (
    <Box
      w={{ base: "100vw", md:'76vw', '2xl':'37.5vw' }}
      h={"auto"}
      margin={"auto"}
      overflow={"hidden"}
      my={"40px"}
      position={"relative"}
      zIndex={1}
    >
      <Flex id="animation" display={"flex"} gap={5}>
        {skill.map((skill, index) => (
          <Box key={index} w={"auto"}>
            <Text
              p={"5px 15px"}
              borderRadius={"30px"}
              border={"1px"}
              borderColor={"#171717"}
              bg={"rgb(5, 5, 5)"}
              color={"white"}
              fontSize={"lg"}
              w={"100%"}
              textAlign={"center"}
              fontWeight={300}
            >
              {skill}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Carrusel;
