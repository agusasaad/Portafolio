import { Box } from "@chakra-ui/react";
import MenuNav from "./MenuNav";
import AvatarNav from "./AvatarNav";
import gsap from "gsap/all";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const NavBar = ({ home, project, about, contact }) => {
  //Ref Animaciones
  const navBarAnimate = useRef(null);

  //Animaciones GSAP
  useEffect(() => {
    gsap.set(navBarAnimate.current, {
      y: -50,
      opacity: 0,
      visibility: "hidden",
    });
    gsap.to(navBarAnimate.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "back.inOut",
      stagger: 0.5,
      visibility: "visible",
      delay: 0.3,
    });
  }, []);

  return (
    <Box
      id="NavBar"
      ref={navBarAnimate}
      w={"100%"}
      h={"auto"}
      bgGradient={
        "linear-gradient(rgb(2, 2, 2) 0%, rgba(2, 2, 2, 0.992) 11.7896%, rgba(2, 2, 2, 0.97) 21.3837%, rgba(2, 2, 2, 0.93) 29.12%, rgba(2, 2, 2, 0.88) 35.3363%, rgba(2, 2, 2, 0.82) 40.3704%, rgba(2, 2, 2, 0.75) 44.56%, rgba(2, 2, 2, 0.67) 48.243%, rgba(2, 2, 2, 0.59) 51.757%, rgba(2, 2, 2, 0.5) 55.44%, rgba(2, 2, 2, 0.416) 59.6296%, rgba(2, 2, 2, 0.325) 64.6637%, rgba(2, 2, 2, 0.24) 70.88%, rgba(2, 2, 2, 0.153) 78.6163%, rgba(2, 2, 2, 0.075) 88.2104%, rgba(2, 2, 2, 0) 100%)"
      }
      display={"flex"}
      position={"fixed"}
      justifyContent={"space-between"}
      borderBottomRadius={{ base: "0px", lg: "30px" }}
      zIndex={11}
    >
      <AvatarNav />
      <MenuNav home={home} project={project} about={about} contact={contact}/>
    </Box>
  );
};

export default NavBar;
