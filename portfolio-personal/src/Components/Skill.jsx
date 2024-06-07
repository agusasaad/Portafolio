import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { duplicateIcons } from "./Technologies";
import { gsap } from "gsap";
import { forwardRef, useEffect, useRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const Skill = forwardRef((props, ref) => {
  const carrucel = useRef(null);
  
  const duration = useBreakpointValue({ base: 50, lg: 30 });

  useEffect(() => {
    gsap.to(carrucel.current, {
      x:(carrucel.current.getBoundingClientRect().width - window.innerWidth) * -1,
      duration: duration,
      ease:'linear',
      repeat:-1,
    });
  }, [duration]);

  return (
    <Box
      ref={ref}
      id="linearGradientCarrucel"
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      width={'100%'}
      maxW={'600px'}
      overflow={"hidden"}
    >
      <Flex id="carrucel" ref={carrucel} flexDirection={"row"} columnGap={"60px"}>
        {duplicateIcons.map((technology, index) => (
          <ul key={index} style={{width:'40px'}}>
            <li style={{fontSize:'40px', color:'#9B9DB4', listStyle:'none'}}>{technology.icon}</li>
          </ul>
        ))}
      </Flex>
    </Box>
  );
});

export default Skill;