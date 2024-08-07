import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const ButtonGitHub = () => {
  const containerButton = useRef(null);
  const githubDescription = useRef(null);
  const buttonVisit = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(
      [containerButton.current, githubDescription.current, buttonVisit.current],
      {
        opacity: 0,
        y: 100,
        ease: "power3",
        duration: 1.2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#ContainerProject",
          start: "center+=100",
          end: "top",
        },
      }
    );

  }, []);

  return (
    <Flex
      ref={containerButton}
      flexDirection={"column"}
      alignItems={"center"}
      w={"100%"}
      h={"auto"}
    >
      <Flex
        ref={githubDescription}
        flexDirection={"column"}
        alignItems={"center"}
        w={"100%"}
      >
        <Text
          className="customTextAboutme"
          as={"p"}
          color={"grey"}
          fontSize={{base:'md', 'lg':"20px"}}
          fontWeight={500}
          textAlign={"center"}
        >
          Thanks for exploring my works!
        </Text>
        <Text
          className="customTextAboutme"
          as={"p"}
          color={"grey"}
          fontSize={{base:'md', 'lg':"20px"}}
          fontWeight={500}
          textAlign={"center"}
        >
          Check out more on my GitHub.
        </Text>
      </Flex>
      <Flex ref={buttonVisit}>
        <Link to={"https://github.com/agusasaad?tab=repositories"} title="Link to my repository">
          <Button
            mt={"18px"}
            fontWeight={600}
            color={"black"}
            size={"lg"}
            borderRadius={"30px"}
          >
            Visit Github
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ButtonGitHub;
