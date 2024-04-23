import { Box, Flex, Text } from "@chakra-ui/react";
import "./Skill.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { LiaToolsSolid } from "react-icons/lia";

const Skill = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#texto1", {
      scrollTrigger: {
        trigger: "#texto1",
        // markers:true,
        start: "top-=800",
      },
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "back.inOut",
      stagger: 0.5,
    });

  }, []);

  return (
    <>
      <Box id="BackgroundColor" w={"100%"} h={"2000px"}>
        <Flex flexDir={"column"} w={"100%"} alignItems={'center'}>
          <Flex
            alignItems={"center"}
            gap={2}
            color={"#9e8dfc"}
            fontSize={"2xl"}
            id="texto1"
          >
            <LiaToolsSolid />
            <Text
            as={"p"}
            letterSpacing={'1px'}
            fontSize={{ base: "xl", xl: "2xl" }}
            fontWeight={400}
            color={"#9e8dfc"}
            >Skills</Text>
          </Flex>
          <Flex id="texto1">
            <Text
              id="fontSkill"
              fontSize={"7xl"}
              fontWeight={500}
              color={"white"}
              letterSpacing={"-6px"}
              lineHeight={'90px'}
              textAlign={'center'}
            >
              Technologies and tools that I use
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Skill;
