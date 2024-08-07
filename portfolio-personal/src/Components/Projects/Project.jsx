import { useEffect, useRef } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardsProjects from "./CardsProjects";
import ButtonGitHub from "./ButtonGitHub";

// eslint-disable-next-line react/prop-types
const Project = () => {
  const containerProject = useRef(null);
  const ProjectTitle = useRef(null);
  const cardsContainer = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(
      [containerProject.current, ProjectTitle.current, cardsContainer.current],
      {
        opacity: 0,
        y: 100,
        ease: "power3",
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerProject.current,
          start: "top-=100 60%",
          end: "bottom top",
        },
      }
    );
  }, []);

  return (
    <Box
      id="ContainerProject"
      ref={containerProject}
      width={{ base: "90%", xl: "80%", "2xl": "100%" }}
      maxWidth={"1900px"}
      h={"auto"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      rowGap={{ base: "40px", lg: "70px" }}
      py={{base:"130px", md:"100px"}}
    >
      <Flex flexDirection={"column"} alignItems={"center"} ref={ProjectTitle}>
        <Text
          as={"h4"}
          color={"#9d8cf8"}
          fontSize={{ base: "md", xl: "xl" }}
          fontWeight={"500"}
          textAlign={"center"}
        >
          Projects
        </Text>
        <Text
          as={"h3"}
          className="Titles"
          fontSize={{ base: "40px", lg: "45px" }}
          fontWeight={400}
          color={"white"}
          letterSpacing={"-2px"}
          textAlign={"center"}
        >
          select work
        </Text>
      </Flex>
      <CardsProjects ref={cardsContainer} />
      <ButtonGitHub />
    </Box>
  );
};

export default Project;
