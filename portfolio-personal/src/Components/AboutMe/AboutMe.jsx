import { Box, Text } from "@chakra-ui/react";
import "./AboutMe.css";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMe = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        markers:true,
        trigger: elementRef.current,
        start: "top top",
        end: "bottom",
        scrub: true,
        pin: elementRef.current
        
      },
    });

    tl.to(elementRef.current, {
      x: -1000,
      opacity:0,
      
    });
  }, []);


  return (
    <Box w={"100%"} h={"2000px"} display={'flex'} flexDirection={'column'} justifyContent={'start'} alignItems={'center'} ref={elementRef} >
      <Box w={'100%'} height={'150px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Text border={'1px'} p={'5px 15px'} borderRadius={'15px'} borderColor={'#7f30f5'} color={'aliceblue'}> About Me</Text>
      </Box>
      <Box height={'auto'}>
        <Text fontSize={'8xl'} color={'aliceblue'} textAlign={'center'}>Prueba texto que aparece</Text>
      </Box>
    </Box>
  );
};

export default AboutMe;
