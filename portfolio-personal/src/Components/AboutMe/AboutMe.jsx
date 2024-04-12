import "./AboutMe.css";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import HeaderAB from "./ComponentAbout/HeaderAB";
import CarruselAB from "./ComponentAbout/CarruselAB";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMe = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        // markers:true,
        start: "top+=5%",
        end: "center",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
    });

    tl.to(elementRef.current, {
      opacity: 0,
      duration: 1,
    });
  }, []);

  const showNavBar = useBreakpointValue({
    base: true,
    xs: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
    full: false,
  });

  return (
    <Box
      id={!showNavBar ? "background" : undefined}
      className={showNavBar ? "background" : undefined}
      w={"100%"}
      h={"auto"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      py={{ base: "0px", md: "200px", lg: "200px", xl: "200px" }}
      ref={elementRef}
    >
      <HeaderAB />
      <CarruselAB />
    </Box>
  );
};

export default AboutMe;
