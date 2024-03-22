import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import "./Header.css";
import Title from "./../../../public/img/Title.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top",
        end: "400",
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
      opacity={"100%"}
      ref={elementRef}
      id="backgroundImage"
      w={"100%"}
      h={{ base: "700px", md: "800px", lg: "1000px", xl: "1000px" }}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"auto"}
        h={"100%"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Text
            color={"aliceblue"}
            fontSize={{ base: "xs", sm: "xl", md: "2xl", xl: "2xl" }}
            fontWeight={400}
            w={"auto"}
            textAlign={"center"}
          >
            {"Hello! I'm Agustin"}
          </Text>
        </Box>
        <Box m={"0px 30px"}>
          <Image src={Title} alt="Dan Abramov" w={"700px"} />
        </Box>
        <Box m={"0px 30px"} display={"flex"} justifyContent={"center"}>
          <Text
            color={"rgb(110, 110, 110)"}
            fontSize={{ base: "xs", sm: "sm", md: "xl", xl: "20px" }}
            textAlign={"center"}
            fontWeight={400}
          >
            Welcome to my personal portfolio! Here, you will find a compilation
            of <br />
            my projects, achievements, and skills. From web designs <br /> to
            innovative solutions.
          </Text>
        </Box>
        <Box mt={"30px"} w={"auto"} display={"flex"} justifyContent={"center"}>
          <Button
            border={"2px"}
            borderColor={"#5632D1"}
            bg={"transparent"}
            color={"aliceblue"}
            fontSize={"md"}
            _hover={"none"}
            gap={1}
          >
            Download cv <MdOutlineFileDownload fontSize={"25px"} />
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
