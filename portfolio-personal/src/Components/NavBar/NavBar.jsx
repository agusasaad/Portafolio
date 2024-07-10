import { Box, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import MenuNav from "./MenuNav";
import AvatarNav from "./AvatarNav";
import gsap from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const NavBar = () => {
  //Ref Animaciones
  const navBarAnimate = useRef(null);

  const [showMenu, setShowMenu] = useState(false)

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
      id="NavBar"
      ref={navBarAnimate}
      w={"100%"}
      h={'auto'}
      display={"flex"}
      position={"fixed"}
      flexDir={{base:'column', lg:'row'}}
      justifyContent={{base:'auto', lg:'space-between'}}
      alignItems={'start'}
      borderBottomRadius={{ base: "0px", lg: "30px" }}
      bgGradient={"linear-gradient(rgb(2, 2, 2) 0%, rgba(2, 2, 2, 0.992) 11.7896%, rgba(2, 2, 2, 0.97) 21.3837%, rgba(2, 2, 2, 0.93) 29.12%, rgba(2, 2, 2, 0.88) 35.3363%, rgba(2, 2, 2, 0.82) 40.3704%, rgba(2, 2, 2, 0.75) 44.56%, rgba(2, 2, 2, 0.67) 48.243%, rgba(2, 2, 2, 0.59) 51.757%, rgba(2, 2, 2, 0.5) 55.44%, rgba(2, 2, 2, 0.416) 59.6296%, rgba(2, 2, 2, 0.325) 64.6637%, rgba(2, 2, 2, 0.24) 70.88%, rgba(2, 2, 2, 0.153) 78.6163%, rgba(2, 2, 2, 0.075) 88.2104%, rgba(2, 2, 2, 0) 100%)"}
      zIndex={1500}
    >
      {showNavBar && <Flex h={"auto"} m={"25px 0px"} position={'absolute'} top={0} right={0}>
          <Button
            variant={"outline"}
            border={"none"}
            color={"white"}
            _hover={"none"}
            onClick={() => setShowMenu(!showMenu)}
          >
            {!showMenu ? <RxHamburgerMenu fontSize={"35px"} /> : <IoCloseOutline fontSize={"35px"} />}
          </Button>
        </Flex>}
      <AvatarNav setShowMenu={setShowMenu}/>
      <MenuNav showMenu={showMenu} setShowMenu={setShowMenu}/>
    </Box>
  );
};

export default NavBar;
