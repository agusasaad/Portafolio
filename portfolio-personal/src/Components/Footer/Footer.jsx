import { Box, Flex, Text } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <Box
      id="containerFooter"
      py={"10px"}
      width={{ base: "90%", md: "90%", lg: "90%", xl: "80%", "2xl": "60%" }}
      maxWidth={'1100px'}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderTop={"1px"}
      zIndex={1}
    >
      <Flex>
        <Text
          as={"p"}
          color={"#9B9DB4"}
          fontSize={{ base: "md", lg: "md" }}
          fontWeight={500}
          textAlign={"center"}
        >
          © 2024 Agustin Asaad.
        </Text>
      </Flex>
      <Flex color={"white"} columnGap={"10px"} fontSize={"20px"}>
      <Link to={"mailto:agusasaad1099@hotmail.com"} title="Email" ><MdEmail /></Link>
      <Link to={"https://www.linkedin.com/in/agustin-asaad/"} title="Linkedin"><FaLinkedin /></Link>
      <Link to={"https://github.com/agusasaad?tab=repositories"} title="GitHub"><FaGithub /></Link>
      </Flex>
    </Box>
  );
};

export default Footer;
