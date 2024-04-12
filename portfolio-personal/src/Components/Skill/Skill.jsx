import { Box, Flex, Text } from "@chakra-ui/react";
import "./Skill.css";
import CarruselSkill from "./CarruselSkill";

const Skill = () => {
  return (
    <>
      <Box
        id="BackgroundSkill"
        w={"100%"}
        h={"600px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={"300px"}
        flexDirection={"column"}
        gap={10}
        position={"relative"}
      >
        <Flex id="gradientBlack"></Flex>
        <Flex alignItems={"center"} gap={2} >
          <Box w={"10px"} h={"10px"} bg={"#00CA4E"} borderRadius={"50%"}></Box>
          <Text color={"gray"} fontSize={"3xl"}>
            Technologies
          </Text>
        </Flex>

        <CarruselSkill />
      </Box>
    </>
  );
};

export default Skill;
