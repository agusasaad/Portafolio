import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutMe.css";
import { useEffect, useRef } from "react";
import SpinninText from "./SpinninText";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const containerAbout = useRef(null);
  const imageProfile = useRef(null);
  const titleAbout = useRef(null);
  const aboutme = useRef(null)
  const button = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(imageProfile.current, {
      opacity: 0,
      scale: 0.2,
      ease: "power2",
      duration: 1.2,
      scrollTrigger: {
        trigger: containerAbout.current,
        start: "top-=400 top",
        end: "bottom top",
      },
    });

    gsap.from(
      [
        titleAbout.current,
        aboutme.current,
        button.current,
      ],
      {
        opacity: 0,
        y: 100,
        ease: "power2",
        duration: 1.2,
        stagger: 0.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: containerAbout.current,
          start: "top-=400 top",
          end: "bottom top",
        },
      }
    );
  }, []);

  return (
    <Box
      ref={containerAbout}
      w={"100%"}
      h={"auto"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      py={{base:"130px", md:"100px"}}
      mx={"15px"}
      gap={"15px"}

    >
      <SpinninText ref={imageProfile} />
      <Flex>
        <Text
          className="Titles"
          ref={titleAbout}
          as={"h3"}
          fontSize={{ base: "40px", lg: "5xl" }}
          fontWeight={400}
          color={"white"}
          letterSpacing={"-2px"}
          textAlign={"center"}
        >
          About Me
        </Text>
      </Flex>
      <Flex
        ref={aboutme}
        textAlign={"center"}
        w={'100%'}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
        maxW={{md:'600px', xl:'800px'}}
        minW={"200px"}
      >
        <Text
          as={"p"}
          color={"grey"}
          fontSize={{ base: "md", lg: "20px" }}
          fontWeight={500}
        >
          Hi there, I&apos;m Agustin – a Front End developer.
        </Text>
        <Text
          as={"p"}
          color={"grey"}
          fontSize={{ base: "md", lg: "20px" }}
          fontWeight={500}
          style={{ textWrap: "balance" }}
        >
          In the past 2 years, I have developed a passion for designing and
          creating web applications. I focus on delivering high-quality user
          experiences, ensuring ease of use and user satisfaction.
        </Text>
        <Text
          as={"p"}
          color={"grey"}
          fontSize={{ base: "md", lg: "20px" }}
          fontWeight={500}
          style={{ textWrap: "balance" }}
        >
          I am motivated to continue learning and growing professionally,
          looking for opportunities that allow me to develop my skills and
          contribute to the success of the company I collaborate with.
        </Text>
      </Flex>
      <Flex ref={button} justifyContent={"center"}>
        <Link to={'https://drive.google.com/file/d/14n6ZmOkh21orDe5k7ofD1ZUDrEdGtnAd/view'} title="URL GOOGLE DRIVE">
          <Button
            mt={"10px"}
            fontWeight={600}
            color={"black"}
            size={"lg"}
            borderRadius={"30px"}
          >
            Curriculum vitae
          </Button> 
        </Link>
      </Flex>
     
    </Box>
  );
};

export default AboutMe;
