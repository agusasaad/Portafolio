import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./Header.css";
import Title from "./../../../public/img/Title.png";

const Header = () => {
  return (
    <Flex id="backgroundImage" w={"100%"} h={"900px"}>
      <Box
        boxSize="xl"
        border={"1px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={"100%"}
      >
        <Text
          color={"aliceblue"}
          fontSize={"2xl"}
          fontWeight={"200"}
          pl={"20px"}
          w={"35%"}
          textAlign={"center"}
        >
          {"Hello! I'm Agustin Asaad"}
        </Text>
        <Image src={Title} alt="Dan Abramov" w={"700px"} />
        <Text
          color={"rgb(110, 110, 110)"}
          fontSize={"sl"}
          pl={"30px"}
          w={"25%"}
          textAlign={"center"}
        >
          Welcome to my personal portfolio! Here, you will find a compilation of
          my projects, achievements, and skills. From web designs to innovative
          solutions.
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
