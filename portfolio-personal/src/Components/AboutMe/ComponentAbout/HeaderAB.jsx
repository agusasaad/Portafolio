import { Box, Text } from "@chakra-ui/react";
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
        gap={1}
      >
        <Text
          as={"p"}
          fontSize={{ base: "xl", xl: "2xl" }}
          fontWeight={300}
          letterSpacing={"1px"}
          color={"#704AEF"}
        >
          overview
        </Text>

        <Text
          className="fontHeader customFontHeader"
          w={{ base: "80%", sm: "60%", md: "60%", lg: "50%", xl: "35%" }}
          as={"h2"}
          fontSize={{ base: "5xl", sm: "6xl", md: "7xl", xl: "8xl" }}
          fontWeight={800}
          letterSpacing={{ base: "-3px", xl: "-4px" }}
          lineHeight={{ base: "60px", md: "70px", xl: "100px" }}
          color={"#FFFFFF"}
          textAlign={"center"}
          pb={{ base: "20px", xl: "30px" }}
        >
          About me and my skills
        </Text>

        <Text
          className="textAboutme customTextAboutme"
          as={"p"}
          fontSize={"xl"}
          fontWeight={500}
          color={"#8B8B8B"}
          letterSpacing={"1px"}
          w={{ base: "90%", sm: "75%", lg: "50%", xl: "30%" }}
          textAlign={"center"}
        >
          I’m a Full Stack developer, specializing in Front End development for
          the past 2 years. I&lsquo;m passionate about creating impactful and
          functional user interfaces.
        </Text>
      </Box>
    </>
  );
};

export default HeaderAB;
