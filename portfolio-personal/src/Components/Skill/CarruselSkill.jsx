import { Box, Flex } from "@chakra-ui/react";
import { duplicatedGroup1, duplicatedGroup2, duplicatedGroup3 } from "./technologies";
import "./Skill.css";

const CarruselSkill = () => {

  return (
    <Box
      w={"45%"}
      h={"15%"}
      overflow={"hidden"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={'center'}
      position={'relative'}
      bg={'black'}
      >
      <Box id="gradientTechnologies" position={'absolute'} w={'100%'} h={'100%'} zIndex={1}></Box>
      <Flex
        id="rotate"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={3}
      >

        <Flex gap={3} id="LeftAnimation" flexDirection={"row-reverse"}>
          {duplicatedGroup2.map((object, index) => (
            <Box
              key={index}
              w={"auto"}
              p={"20px"}
              bg={"#0F0F0F"}
              borderRadius={"30px"}
            >
              <Box fontSize={"70px"} color={'white'}>
                {object.icon}
              </Box>
            </Box>
          ))}
        </Flex>
        <Flex gap={3} id="RightAnimation">
          {duplicatedGroup1.map((object, index) => (
            <Box
              key={index}
              w={"auto"}
              p={"20px"}
              bg={"#0F0F0F"}
              borderRadius={"30px"}
            >
              <Box fontSize={"70px"} color={'white'}>
                {object.icon}
              </Box>
            </Box>
          ))}
        </Flex>
        <Flex gap={3} id="LeftAnimation" flexDirection={"row-reverse"}>
          {duplicatedGroup2.map((object, index) => (
            <Box
              key={index}
              w={"auto"}
              p={"20px"}
              bg={"#0F0F0F"}
              borderRadius={"30px"}
            >
              <Box fontSize={"70px"} color={'white'}>
                {object.icon}
              </Box>
            </Box>
          ))}
        </Flex>
        <Flex gap={3} id="RightAnimation">
          {duplicatedGroup3.map((object, index) => (
            <Box
              key={index}
              w={"auto"}
              p={"20px"}
              bg={"#0F0F0F"}
              borderRadius={"30px"}
            >
              <Box fontSize={"70px"} color={'white'}>
                {object.icon}
              </Box>
            </Box>
          ))}
        </Flex>
        <Flex gap={3} id="LeftAnimation" flexDirection={"row-reverse"}>
          {duplicatedGroup1.map((object, index) => (
            <Box
              key={index}
              w={"auto"}
              p={"20px"}
              bg={"#0F0F0F"}
              borderRadius={"30px"}
            >
              <Box fontSize={"70px"} color={'white'}>
                {object.icon}
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CarruselSkill;
