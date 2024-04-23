import { Box } from "@chakra-ui/react";
import MenuNav from "./MenuNav";
import AvatarNav from "./AvatarNav";
import gsap from "gsap/all";
import { MotionPathPlugin } from "gsap/all";
import { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.set(["#NavBarAnimate"], { y : 50, opacity:0 });
    gsap.to(["#NavBarAnimate"], {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "back.inOut",
      stagger: 0.5,
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
