import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./Header.css";
import Title from "./../../../public/img/titleBlue.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Header = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([".animation"], { y: 100, opacity: 0 });

    gsap.to([".animation"], {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power2.inOut",
      duration: 1.5,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        // markers: true,
        start: "top",
        end: "bottom-=50%",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
    });

    tl.to(elementRef.current, {
      opacity: 0,
      duration: 1,
    });
  }, []);


  return (
    <Flex
      id="backgroundImage"
      w={"100%"}
      h={{ base: "750px", md: "750px", lg: "600px", xl: "950px" }}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      ref={elementRef}
      mb={"50px"}
    >
      <Flex
        className="animation"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"auto"}
        h={"auto"}
      >
        <Box display={"flex"} justifyContent={"center"} mb={"20px"}>
          <Text
            color={"white"}
            fontSize={{ base: "sm", sm: "md", md: "lg", xl: "lg" }}
            fontWeight={200}
            w={"auto"}
            textAlign={"center"}
            border={"1px"}
            borderColor={"#171717"}
            bg={"rgb(5, 5, 5)"}
            borderRadius={"20px"}
            p={{ base: "5px 10px", sm: "5px 15px" }}
            letterSpacing={"1px"}
          >
            Hello! I&apos;m Agustin
          </Text>
        </Box>
        <Box m={"0px 30px"}>
          <Image src={Title} alt="Dan Abramov" w={"600px"} className="img" />
        </Box>
        <Box m={"0px 30px"} display={"flex"} justifyContent={"center"}>
          <Text
            as={"p"}
            w={{ base: "auto", sm: "70%", md: "70%", lg: "55%", xl: "55%" }}
            color={"#959499"}
            fontSize={{ base: "lg", sm: "lg", md: "xl", xl: "20px" }}
            textAlign={"center"}
            fontWeight={500}
            letterSpacing={"1px"}
          >
            Welcome to my personal portfolio! Here, you will find a compilation
            of my projects, achievements, and skills. From web designs <br /> to
            innovative solutions.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
