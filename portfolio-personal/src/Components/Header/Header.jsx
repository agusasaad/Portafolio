import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./../../../public/img/titleBlue.png";
import "./Header.css";

const Header = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([".animation"], { y: 50, opacity: 0 });

    gsap.to([".animation"], {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "back.inOut",
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
      h={'auto'}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      ref={elementRef}
      py={{base:'20vh', md:'30vh', '2xl':'25vh'}}
      position={"relative"}
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
            Hello, I&apos;m Agustin
          </Text>
        </Box>
        <Box m={"0px 30px"}>
          <Image src={Title} alt="Dan Abramov" w={"600px"} className="img" />
        </Box>
        <Box m={"0px 30px"} display={"flex"} justifyContent={"center"}>
          <Text
            as={"p"}
            w={{ base: "100%", sm: "70%", md: "70%", lg: "40%", xl: "40%" }}
            color={"#959499"}
            fontSize={{ base: "xl", sm: "lg", md: "xl", xl: "20px" }}
            textAlign={"center"}
            fontWeight={500}
            letterSpacing={{ base: "0px", lg: "1px" }}
          >
            Welcome to my personal portfolio! Here you&apos;ll find a
            compilation of About Me, my skills, projects, and more. From web
            designs to innovative solutions
          </Text>
        </Box>
        <Box>

        </Box>

      </Flex>
    </Flex>
  );
};

export default Header;
