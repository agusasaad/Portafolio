import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import AvatarImage from "./../../../public/img/avatar.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <Box w={"60%"} h={"100vh"} display={"flex"}>
      <Flex w={"100%"} justifyContent={'space-between'}>
      <Flex justifyContent={'center'} alignItems={'center'}>
          <Image src={AvatarImage} w={'300px'}></Image>
        </Flex>
        <Flex w={'60%'} flexDirection={"column"} justifyContent={'center'}>
          <Text color={"#9d8cf8"} fontSize={{ base: "md", xl: "xl" }}>
            About Me
          </Text>
          <Text
            id="FontProject"
            fontSize={{ base: "40px", xl: "6xl" }}
            fontWeight={400}
            color={"white"}
            letterSpacing={"-2px"}
          >
            Hello, I&apos;m
          </Text>
          <Text
            id="FontProject"
            fontSize={{ base: "40px", xl: "6xl" }}
            fontWeight={400}
            color={"white"}
            letterSpacing={"-2px"}
          >
            Agustin Asaad
          </Text>
          <Text
          as={"p"}
          color={"#9B9DB4"}
          fontSize={{ base: "md", lg: "20px" }}
          fontWeight={500}
          >
            I&apos;m a product designer, whose proficiency in web and mobile design
            has lead me to work on projects for large companies as well. My
            skillsets also extend into 3D visual development, something that you
            will see frequently among my portfolio pieces!
          </Text>
        </Flex>
        
      </Flex>
    </Box>
  );
};

export default AboutMe;
