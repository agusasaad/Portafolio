import { Box, Flex, Image, Text } from "@chakra-ui/react";
import avatar from "./../../../../public/img/avatar.png";
import "../AboutMe.css";

const HeaderAB = () => {
  return (
    <>
      <Box
        h={"auto"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        zIndex={2}
      >
        <Flex  w={"100%"} alignItems={'center'} flexDirection={'column'} gap={3}>
        <Image id="imageAvatar" src={avatar} w={{ base: "60px", xl: "80px" }}></Image>
        <Text
          as={"p"}
          letterSpacing={'1px'}
          fontSize={{ base: "xl", xl: "2xl" }}
          fontWeight={400}
          color={"#9e8dfc"}
        >
          Introduction
        </Text>
        </Flex>

        <Text
          className="fontHeader customFontHeader"
          as={"h2"}
          fontSize={{ base: "6xl", sm: "6xl", md: "7xl", xl: "8xl" }}
          fontWeight={800}
          letterSpacing={{ base: "-3px", xl: "-4px" }}
          color={"#FFFFFF"}
          textAlign={"center"}
        >
          About me
        </Text>

        <Text
          className="textAboutme customTextAboutme"
          as={"p"}
          fontSize={"xl"}
          fontWeight={500}
          color={"#8B8B8B"}
          letterSpacing={{ base: "0px", lg: "1px"}}
          w={{ base: "90vw", sm:'70vw', md:'60vw', lg:'50vw', xl:'30vw', '2xl': '30vw' }}
          textAlign={"center"}
        
        >
          I&apos;m a full stack developer with two years of experience, focusing on
          front end development. I enjoy styling and crafting responsive
          websites, with a passion for creating intuitive and visually appealing
          user interfaces.
        </Text>
      </Box>
    </>
  );
};

export default HeaderAB;
