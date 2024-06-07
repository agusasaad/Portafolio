import {
  Box,
  Button,
  Flex,
  Text,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactMe = () => {
  const toast = useToast();

  const containerAbout = useRef(null);
  const aboutSubtitle = useRef(null);
  const aboutTitle = useRef(null);
  const aboutButton = useRef(null);
  const startContact = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(
      [
        containerAbout.current,
        aboutSubtitle.current,
        aboutTitle.current,
        aboutButton.current,
        startContact.current,
      ],
      {
        opacity: 0,
        y: 100,
        ease: "power3",
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerAbout.current,
          start: "top-=500 50%",
          end: "top top",
          // markers:true
        },
      }
    );
  }, []);

  const mediaQuerys = useBreakpointValue({ base: false, sm: false, lg: true });

  return (
    <Box
      id="containerContact"
      h={'auto'}
      my={{base:'150px',xl:'300px'}}
      width={{ base: "90%", md: "90%", lg: "90%", xl: "80%", "2xl": "59%" }}
      maxWidth={"1100px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      ref={containerAbout}
      overflowY={'visible'}
    >
      <Flex w={"auto"} flexDir={"column"} alignItems={"start"} rowGap={"5px"}>
        <Text
          ref={aboutSubtitle}
          color={"#9d8cf8"}
          fontSize={{ base: "md", xl: "xl" }}
        >
          Contact Me
        </Text>
        <Text
          ref={aboutTitle}
          id="FontProject"
          fontSize={{ base: "40px", lg: "5xl" }}
          fontWeight={400}
          color={"white"}
          letterSpacing={"-2px"}
          style={{ textWrap: "balance" }}
          mb={"5px"}
        >
          Open to jobs and collaborations
        </Text>
        <Flex ref={aboutButton}>
          <Button
            id="FontProject"
            fontSize={{ base: "40px", lg: "5xl" }}
            fontWeight={400}
            letterSpacing={"-2px"}
            bg={"transparent"}
            color={"white"}
            p={"0px"}
            _hover={{ bg: "transparent" }}
            onClick={() =>
              toast({
                title: "",
                description: "Email copied successfully",
                status: "success",
                duration: 2000,
                isClosable: true,
              })
            }
          >
            Email me <FiArrowUpRight style={{ fontSize: "50px" }} />
          </Button>
        </Flex>
      </Flex>
      {mediaQuerys ? (
        <Flex
          ref={startContact}
          w={"20%"}
          flexDir={"column"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          gap={"10px"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "-30px" }}
          >
            <path
              d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
              fill="#FEA863"
            ></path>
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
              fill="#FEA863"
            ></path>
          </svg>
        </Flex>
      ) : null}
    </Box>
  );
};

export default ContactMe;
