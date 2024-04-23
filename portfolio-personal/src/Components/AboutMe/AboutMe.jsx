import "./AboutMe.css";
import { Box} from "@chakra-ui/react";
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
        start: "top+=15%",
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

  return (
    <Box
      id="background"
      w={"100%"}
      h={"auto"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      py={'20vh'}
      mb={'100px'}
      position={"relative"}
      ref={elementRef}
    >
      <HeaderAB />
      <CarruselAB />
    </Box>
  );
};

export default AboutMe;

