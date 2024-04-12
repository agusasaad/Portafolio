import { Box, Flex, Text } from "@chakra-ui/react";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

import "./Skill.css";

const CarruselSkill = () => {
  const Technologies = [
    { tecnology: "Javascript", icon: <IoLogoJavascript /> },
    { tecnology: "HTML", icon: <FaHtml5 /> },
    { tecnology: "CSS", icon: <FaCss3Alt /> },
    { tecnology: "React", icon: <FaReact /> },
    { tecnology: "Bootstrap", icon: <FaBootstrap /> },
    { tecnology: "ChakraUi", icon: <SiChakraui /> },
    { tecnology: "NodeJs", icon: <FaNodeJs /> },
    { tecnology: "Express", icon: <SiExpress /> },
    { tecnology: "PostgreSql", icon: <BiLogoPostgresql /> },
    { tecnology: "Mysql", icon: <SiMysql /> },
    { tecnology: "Figma", icon: <CgFigma /> },
    { tecnology: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
    { tecnology: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
    { tecnology: "Javascript", icon: <IoLogoJavascript /> },
    { tecnology: "HTML", icon: <FaHtml5 /> },
    { tecnology: "CSS", icon: <FaCss3Alt /> },
    { tecnology: "React", icon: <FaReact /> },
    { tecnology: "Bootstrap", icon: <FaBootstrap /> },
    { tecnology: "ChakraUi", icon: <SiChakraui /> },
    { tecnology: "NodeJs", icon: <FaNodeJs /> },
    { tecnology: "Express", icon: <SiExpress /> },
    { tecnology: "PostgreSql", icon: <BiLogoPostgresql /> },
    { tecnology: "Mysql", icon: <SiMysql /> },
    { tecnology: "Figma", icon: <CgFigma /> },
    { tecnology: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
    { tecnology: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
  ];

  return (
    <Box w={"100vw"} h={"auto"} overflow={"hidden"}>
      <Flex id="animation" display={"flex"} alignItems={"center"} gap={10}>
        {Technologies.map((object, index) => (
          <Box
            key={index}
            w={"200px"}
            color={"white"}
            fontSize={"100px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
          >
            <Box>{object.icon}</Box>
            <Text
              fontSize={"md"}
              color={"grey"}
              border={"1px"}
              p={"2px 10px"}
              borderRadius={"20px"}
              borderColor={"#171717"}
              bg={"rgb(5, 5, 5)"}
            >
              {object.tecnology}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CarruselSkill;
