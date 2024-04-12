import { Box } from "@chakra-ui/react";
import MenuNav from "./MenuNav";
import AvatarNav from "./AvatarNav";
import gsap from "gsap/all";
import { MotionPathPlugin } from "gsap/all";
import { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.set(["#NavBarAnimate"], { x : -100 });
    gsap.to(["#NavBarAnimate"], {
      autoAlpha: 1,
      x : 0,
      stagger: 0.1,
      ease:'power2.inOut',
      duration:1.5
    })

  }, []);

  return (
    <>
      <Box
        id="NavBarAnimate"
        display={"flex"}
        position={"fixed"}
        justifyContent={"space-between"}
        w={"100%"}
        zIndex={1}
        h={"auto"}
        py={"10px"}
      >
        <AvatarNav />
        <MenuNav />
      </Box>
    </>
  );
};

export default NavBar;
